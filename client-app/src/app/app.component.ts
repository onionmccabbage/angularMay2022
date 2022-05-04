import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // use the constructor to instantiate our service
  constructor(private userService:UsersService){}

  // properties of this component
  users
  //methods of this component
  ngOnInit(): void {
      // make a call to the service as soon as this component is initialized
      this.callUserService()
  }
  callUserService(){
    // here we can make a cal to our UsersService instance
    this.userService.getUsers() // this returns an Observable
      // we subscribe to the observable - we are notified of EVERY response
      .subscribe( (users)=>{this.users = users} ) // this is async - we wait
  }
}
