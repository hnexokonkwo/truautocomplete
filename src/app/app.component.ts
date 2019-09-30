import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tru-autocomplete';
  text;

  arrayList = ['mobolarinwa', 'Henry', 'Kelechi', "Okonkwo", 'Morgan', 'Seamfix', 'Mobile'];

}
