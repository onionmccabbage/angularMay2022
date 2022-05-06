import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PhotoService } from './photo.service';
import { RendererComponent } from './renderer/renderer.component';


@NgModule({
  declarations: [
    AppComponent,
    RendererComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
