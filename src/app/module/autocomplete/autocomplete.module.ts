import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './clickOutside.directive';

@NgModule({
  declarations: [
    AutocompleteComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AutocompleteComponent
  ]
})
export class TruAutocompleteModule { }
