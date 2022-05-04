import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // some default values to inject into the 'view' component
  city    = 'dublin'
  country = 'ie'
}
