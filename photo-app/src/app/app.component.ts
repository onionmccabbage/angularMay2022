import { Component, OnInit } from '@angular/core';
import { Photo } from './classes/photo';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// the interface OnInit is implemented by ngOnInit
export class AppComponent implements OnInit {
  pictures:Array<string> // or string[] (equivalent)
  currentSelection:Photo
  // whenever we use an http service in Angular it will look similar to this
  constructor(private photoService:PhotoService){}

// we can use Typescript to specify the return type of a method
  ngOnInit(): void { // we aim to return void in most cases in Angular
      // call our photo service
      this.photoService.getPhotos()
        .subscribe( this.handleSuccess, this.handleProblems )
        
  }
  // NB the call-backs must be arrow-functions
  handleSuccess=(d:Array<Photo>)=>{
    // console.log('handleSuccess has been called')
    this.pictures = d
  }
  handleProblems=(err:Error)=>{
    console.log(err)
  }
  handleSelected(i){
    console.log(i)
    // i represents the index of the member in our array
    this.currentSelection = this.pictures[i]

  }
}
