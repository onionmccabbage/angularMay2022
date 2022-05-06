import { Component, OnInit } from '@angular/core';
import { IPhoto } from './interfaces/i_photo';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// the interface OnInit is implemented by ngOnInit
export class AppComponent implements OnInit {
  pictures:Array<IPhoto> 
  currentSelection:IPhoto
  whichAlbum:number = 1

  constructor(private photoService:PhotoService){}

  ngOnInit(): void {
      this.photoService.getPhotosByAlbum(this.whichAlbum)
        .subscribe( this.handleSuccess, this.handleProblems )
  }

  handleSuccess=(d:IPhoto[]):void=>{
    this.pictures = d
  }
  handleProblems=(err:Error):void=>{
    console.log(err)
  }
  handleSelected(i):void{
    console.log(i)
    this.currentSelection = this.pictures[i]
  }
  deleteItem(i):void{
    this.pictures.splice(i,1)
  }
}
