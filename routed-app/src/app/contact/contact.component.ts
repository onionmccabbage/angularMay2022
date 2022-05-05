import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // properties
  d:object

  constructor(private route:ActivatedRoute) {
    route.params.subscribe( (params)=>{ // all routes are Observables
      // this.id = params['id']
    } )
   }

  ngOnInit() {
    this.route.data.subscribe(data => {
        this.d=data;
    })
}

}
