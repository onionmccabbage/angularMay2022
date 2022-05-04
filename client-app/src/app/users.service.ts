import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  // Typescvript allows public/private/protected members
  // a private member is only accessible within this class
  constructor(private http:HttpClient) { }
  // properties of this sevice
  userURL:string = 'https://jsonplaceholder.typicode.com/users'
  // methods of this service
  getUsers(){
    return this.http.get(this.userURL)
  }
  getApiWithParams(cat:string, id:number){
    // when building strings, use back-tick interpolation (ES6)
    let url = `https://jsonplaceholder.typicode.com/${cat}/${id}`
    return this.http.get(url) // here we async call the external api
  }
}
