import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class SwapiApiService {

  constructor(private http:HttpClient) { }

  swapiURL = ''

  getSwapi(cat, num){
    this.swapiURL = `https://swapi.dev/api/${cat}/${num}/`
    return this.http.get(this.swapiURL)
  }

}
