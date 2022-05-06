import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data:string

  persistData(){
    localStorage.setItem('data', this.data)
  }
  clearData(){
    localStorage.clear()
  }

  ngOnInit(): void {
      // when the app loads, read any localStorage value
      this.data = localStorage.getItem('data')
  }
}
