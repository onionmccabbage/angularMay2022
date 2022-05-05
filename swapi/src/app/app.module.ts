import { HttpClientModule } from '@angular/common/http';
import { SwapiApiService } from './swapi-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SwapiFormComponent } from './swapi-form/swapi-form.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { RouterModule, Routes } from '@angular/router';

// declare routes
const routes:Routes = [
  {path:'', redirectTo:'search', pathMatch:'full'},
  {path:'search', component:SearchComponent},
  {path:'people/:id', component:PeopleComponent},
  {path:'planets/:id', component:PlanetsComponent},
  {path:'species/:id', component:SpeciesComponent},
  {path:'vehicles/:id', component:VehiclesComponent},
  // catch all unresolved paths with a 'page not found' response
  {path:'**', redirectTo:'search', pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    SwapiFormComponent,
    SearchComponent,
    DetailsComponent,
    PeopleComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SwapiApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
