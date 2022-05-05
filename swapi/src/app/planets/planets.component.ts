import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiApiService } from 'app/swapi-api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  // properties for this component
  id:string
  planetsData

  constructor(
    private route:ActivatedRoute, 
    private swapi:SwapiApiService) { 
    route.params.subscribe( (params)=>{ // all routes are Observables
      this.id = params['id']
    } )
  }

  ngOnInit() {
    // make a call to the SWAPI service, passing in the URL parameter for ID
    this.swapi.getSwapi('planets', this.id)
      .subscribe( (d)=>{
        this.planetsData = d
      } )
  }

}
