import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input() imgSize = 12
  @Input() init


  // an array of image model data
  pictures = [
    {imgUrl:'https://placekitten.com/240/120', w:120, alt:'kitten', title:'hello kitty'},
    {imgUrl:'https://placebear.com/240/120', w:120, alt:'bear', title:'lions and tigers and...'},
    {imgUrl:'https://placekitten.com/120/120', w:120, alt:'other', title:'awwww'},
    {imgUrl:'https://placekitten.com/320/120', w:120, alt:'more', title:'cute'}]


  ngOnInit() {
  }
  grow = ()=>{
    // this.imgSize = Number(this.imgSize) + 32
    if (Number(this.init.w) + 32 <= 1024){
      this.init.w = Number(this.init.w) + 32
    }
  }
  shrink = ()=>{
    // this.imgSize = Number(this.imgSize) - 32
    if (Number(this.init.w) - 32 >= 32){
      this.init.w = Number(this.init.w) - 32
    }
  }
  removeImage = (whichImage)=>{ // receive an index number - which image was clicked?
    // this.toDoList.indexOf(addedItem)
    let index = Number(whichImage)
    this.pictures.splice(index,1)
  }
}
