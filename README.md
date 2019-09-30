# TruAutocomplete

Enables users quickly search or filter through a pre-populated list as a user type. It provides suggestion in a dropdown while typing into the field.

## Installation

Install through NPM:
```
npm install tru-autocomplete --save
```

## Usage

Import AutocompleteModule

```
...
import { TruAutocompleteModule } from 'tru-autocomplete';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    TruAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In your compenent.html
```
<tru-autocomplete 
placeholder = "Search"
[filterFrom]="arrayList" 
[(ngModel)]="text">
    Label Name
</tru-autocomplete>
```

In your component.ts

```
...
export class AppComponent {
  text: any;
  arrayList = ['mobolarinwa', 'Henry', 'Kelechi', "Okonkwo", 'Morgan', 'Truparse', 'Mobile'];
}
```

Adding your own css using `inputClass` for the input field and `dropdownClass` for dropdown

```
<tru-autocomplete 
placeholder="search"
[filterFrom]="arrayList" 
inputClass= "form-control" 
dropdownClass = "dropdown-class"
[(ngModel)]="text">
    Label Name
</tru-autocomplete>
```

## Developers

Know more about [Truparse](https://truparse.com).
