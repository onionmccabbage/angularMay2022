import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // properties for this component
  id:string // all URL parameters will be string

  // this component has access to the route and route parameters
  constructor(private route:ActivatedRoute) {
    route.params.subscribe( (params)=>{ // all routes are Observables
      this.id = params['id']
    } )
   }

  ngOnInit() {
  }

}
