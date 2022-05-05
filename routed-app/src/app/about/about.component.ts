import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // properties for this component
  data:object // no initial value

  constructor(private route:ActivatedRoute) { 
    route.data.subscribe( (d)=>{
      this.data = d
    } )
  }

  ngOnInit() {
  }

}
