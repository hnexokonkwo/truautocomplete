import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutocompleteComponent),
    multi: true
};


@Component({
  selector: 'tru-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class AutocompleteComponent implements ControlValueAccessor  {

  @Input() filterFrom; // Json to filter from
  @Input() inputClass; // for input class
  @Input() dropdownClass; // for dropdown class 
  results: any; // Result after filtering JSON
  isFiltering: boolean; // To show or hide dropdown


  constructor() { }

  // Filtering through list.
  filter(event){
    let value = event.target.value;
    this.isFiltering = false;
    if(event.keyCode !== 13){
      if(value.length > 0){
        this.results = this.filterFrom.filter(word => word.toLowerCase().includes(value.toLowerCase()));
        if(this.results.length > 0){
          this.isFiltering = true;
        }
      }else{
        this.isFiltering = false;
      }
    }
  }

  // on click of dropdown
  mapToModel(item){
    console.log(item);
    this.isFiltering = !this.isFiltering;
    this.updateValue(item);
  }

  updateValue(item){
    this.innerValue = item
    this.onChangeCallback(item);
  }



  //The internal data model
  private innerValue: any = '';

  //Placeholders for the callbacks which are later provided
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  //get accessor
  get value(): any {
      return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
      if (v !== this.innerValue) {
          this.updateValue(v);
      }
  }

  //Set touched on blur
  onBlur() {
      this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
      if (value !== this.innerValue) {
          this.innerValue = value;
      }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
      this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
      this.onTouchedCallback = fn;
  }


}
