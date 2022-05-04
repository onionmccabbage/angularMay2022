import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // here are the data models
  // a composite data model
  m = {"title":"complex data", "num":-6, 'obscured':false}
  imageInit = {imgUrl:'https://placekitten.com/240/120', w:120, alt:'ALT TEXT', title:'TITLE TEXT'}
  imgUrl:string = 'https://placekitten.com/120/240'
  askCookies = true // we CAN explicitly type this, but Typescript Implicitly types it for us
  // here is an array of data members
  w = 120
  products = [{'name':'dots',  'price': 3.99},
              {'name':'pots',  'price': 4.99},
              {'name':'spots', 'price': 1.99}]
  today = new Date()
  // here are methods of this class (use modern ES function syntax)
  handleAgree = ()=>{
    this.askCookies = !this.askCookies // invert the value
    // we can adjust the width of the image by altering this.w
    this.w = Number(this.w) + 120 // we can make sure it is a numeric value
  }
  handleCustEv = (data)=>{
    console.log(data)
    this.w = data
  }
}
