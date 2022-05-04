import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AboutComponent } from './about/about.component';
import { ReviewComponent } from './review/review.component';
// in order to use Angular forms we MUST enable the FormsModule
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AboutComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
