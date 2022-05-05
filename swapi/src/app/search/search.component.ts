import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SwapiApiService } from 'app/swapi-api.service';
import { emit } from 'process';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private swapiAPI:SwapiApiService){}
  timestamp
  status:string = 'waiting...'
  @Input() category:string = 'starships'
  @Input() id:string = '3'
  @Output() swapiEvent = new EventEmitter()
  swapi = {}
  appDefaults = {'category':'people', 'id':1}

  categories = [
  {v:"people"},
  {v:"planets"},
  {v:"species"},
  {v:"starships"}
  ]

  handleForm(){
    this.swapiAPI.getSwapi(this.category, this.id)
    .subscribe(  (data)=> this.swapi = data  )
  }

  handleSwapiEvent(evt){
    this.status = evt.status
    this.timestamp = evt.timestamp
    this.swapiEvent.emit(this.timestamp)
  }
}
