import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullname:string
  // declare reactive form elements
  profileForm = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl('')
  })
  handleSubmit(){
    // this.fullname = this.profileForm.value
    this.fullname = `${this.profileForm.value.firstName} ${this.profileForm.value.lastName}`
  }


  user = {username:''}
}
