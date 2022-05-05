import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiApiService } from 'app/swapi-api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  // properties for this component
  id:string
  personData

  constructor(
    private route:ActivatedRoute, 
    private swapi:SwapiApiService) { 
    route.params.subscribe( (params)=>{ // all routes are Observables
      this.id = params['id']
    } )
  }

  ngOnInit() {
    // make a call to the SWAPI service, passing in the URL parameter for ID
    this.swapi.getSwapi('people', this.id)
      .subscribe( (d)=>{
        this.personData = d
      } )
  }

}
