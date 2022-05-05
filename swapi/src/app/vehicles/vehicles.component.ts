import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiApiService } from 'app/swapi-api.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

 // properties for this component
 id:string
 vehiclesData

 constructor(
   private route:ActivatedRoute, 
   private swapi:SwapiApiService) { 
   route.params.subscribe( (params)=>{ // all routes are Observables
     this.id = params['id']
   } )
 }

 ngOnInit() {
   // make a call to the SWAPI service, passing in the URL parameter for ID
   this.swapi.getSwapi('vehicles', this.id)
     .subscribe( (d)=>{
       this.vehiclesData = d
     } )
 }

}
