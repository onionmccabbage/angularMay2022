import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // data members
  user = {name:'Ada', email:'ada@babbage.com'}
  @Output() custEv = new EventEmitter()
  w = 128
  constructor() { }
  ngOnInit() {
  }
  // methods
  handleChange = ()=>{
    console.log('change happened')
    // we can emit our custom event with a data payload
    this.custEv.emit(this.w)
  }

}
