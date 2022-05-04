import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // declare non-exposed models for this component
  n:string='child'
  // here are data members available to the parent
  @Input() init:string = 'initialize'

  // declare methods for this component


}
