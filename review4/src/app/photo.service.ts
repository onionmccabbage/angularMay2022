import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhoto } from './interfaces/i_photo';

@Injectable()
export class PhotoService {
  url = 'https://jsonplaceholder.typicode.com/photos' // `?albumId=${albumId}`

  constructor(private http:HttpClient) { }
  getPhotosByAlbum(albumId:number=1):Observable<IPhoto[]>  { 
    return this.http.get<IPhoto[]>(`${this.url}?albumId=${albumId}`)
  }
}
