import { Component, OnInit } from '@angular/core';
import { IPhoto } from './classes/i_photo';
import { Photo } from './classes/photo';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// the interface OnInit is implemented by ngOnInit
export class AppComponent implements OnInit {
  pictures:Array<IPhoto> // or Photo[] (equivalent)
  currentSelection:Photo // typescript will 'duck-type' - if it looks the same, it is the same
  fullPath:string
  // whenever we use an http service in Angular it will look similar to this
  constructor(private photoService:PhotoService){}

// we can use Typescript to specify the return type of a method
  ngOnInit(): void { // we aim to return void in most cases in Angular
      // call our photo service
      this.photoService.getPhotos()
        .subscribe( this.handleSuccess, this.handleProblems )
      this.doAdverts()  
      this.doTracking()  
      this.doQoS()  
  }
  doAdverts=()=>{
    this.photoService.getPhotos()
      .subscribe( ()=>{
        // here we can run some adverts
      } )
  }

  doTracking=()=>{
    this.photoService.getPhotos()
      .subscribe( ()=>{
        // here we can track the user
      } )
  }

  doQoS=()=>{
    this.photoService.getPhotos()
      .subscribe( ()=>{
        // here we can monitor the quality of our service
      } )
  }
  // NB the call-backs must be arrow-functions
  handleSuccess=(d:Photo[]):void=>{ // or Array<photo>
    // console.log('handleSuccess has been called')
    this.pictures = d
  }
  handleProblems=(err:Error):void=>{
    console.log(err)
  }
  handleSelected(i):void{
    console.log(i)
    // i represents the index of the member in our array
    this.currentSelection = this.pictures[i]
    this.fullPath = `assets/gallery/${this.currentSelection.filename}.jpg`
  }
}
