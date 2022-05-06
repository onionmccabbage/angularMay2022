import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPhoto } from '../interfaces/i_photo';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit {

  @Input() p:IPhoto
  @Input() idx:number
  @Output() photoEvent = new EventEmitter()
  @Output() deleteEvent = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  handleSelected(){
    this.photoEvent.emit(this.idx)
  }
  deleteItem(){
    this.deleteEvent.emit(this.idx)
  }

}
