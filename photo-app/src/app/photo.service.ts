import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './classes/photo';

@Injectable()
export class PhotoService {
  url = 'assets/photos.json'

  // angular http services ALWAYS look like this
  constructor(private http:HttpClient) { }
  // methods of this service (allow for the possibility of errors)
  getPhotos():Observable<Photo[]>  { //| Observable<Error> // what would the return type be?
    // every http in Angular will return an Observable
    return this.http.get<Photo[]>(this.url)
  }
}
