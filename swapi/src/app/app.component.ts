import { SwapiApiService } from './swapi-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultCat = 'species'
  defaultID = '3'
  ts

  showTimestamp(evt){
    this.ts = evt.timestamp
  }
}
