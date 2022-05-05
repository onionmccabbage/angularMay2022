import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';

// declare routing routes
const routes:Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  // we can target a specific routerOutlet by its name (see also the routerLink)
  {path:'about', component:AboutComponent, data:{tel:123456789, email:'about@nonsuch.ie'}, outlet:'sidebar'},
  {path:'contact', component:ContactComponent},
  {path:'home', component:HomeComponent},
  // catch common mis-spellings or alternate/older names with redirects
  {path:'poduct', redirectTo:'product', pathMatch:'full'},
  {path:'product', component:ProductComponent},
  // we can parametarise paths (use :)
  {path:'product/:id', component:ProductComponent}, // one parameter
  // catch all unresolved paths with a 'page not found' response
  {path:'**', component:PageNotFoundComponent},
  // {path:'**', redirectTo:'home', pathMatch:'full'} // alternative for non-existant paths
]

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
