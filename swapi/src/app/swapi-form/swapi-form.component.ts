import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-swapi-form',
  templateUrl: './swapi-form.component.html',
  styleUrls: ['./swapi-form.component.css']
})
export class SwapiFormComponent implements OnInit {

  @Input() initDefaults = {'category':'people', 'num':1}
  @Output() resultEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

}
