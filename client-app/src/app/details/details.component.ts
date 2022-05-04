import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';
import Photo from './classes/photo';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // properties for this component
  @Input() category:string
  @Input() id:number
  someService
  // we need an isntance of the UserService
  // Angular will instantiate this forr us - we dont need to write this.
  constructor(private userService:UsersService) {}
  // properties
  results
  // we can tell Typescript wha sort of data we expect in an array
  photo:Photo //Array<Photo> or Photo[]
  ngOnInit() {
  }
  // methods - cal the userService
  makeApiCall(){ // or makeApiCall = ()=>{}
    // call the service, passing params
    this.userService.getApiWithParams(this.category, this.id)
      // the '|' here is used for a type union - it might be any of these types
      .subscribe( (r:Photo|any)=>{ // it might be a photo or it might be anything else
        if (this.category=='photos'){
          this.photo = r
        } else {
          this.results = r
        }
      } )

  }


}
