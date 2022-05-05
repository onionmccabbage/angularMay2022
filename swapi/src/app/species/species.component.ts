import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiApiService } from 'app/swapi-api.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  // properties for this component
  id:string
  speciesData

  constructor(
    private route:ActivatedRoute, 
    private swapi:SwapiApiService) { 
    route.params.subscribe( (params)=>{ // all routes are Observables
      this.id = params['id']
    } )
  }

  ngOnInit() {
    // make a call to the SWAPI service, passing in the URL parameter for ID
    this.swapi.getSwapi('species', this.id)
      .subscribe( (d)=>{
        this.speciesData = d
      } )
  }

}
