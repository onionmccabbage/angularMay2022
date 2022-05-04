import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  // in old Angular, services were injected as 'providers'
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
