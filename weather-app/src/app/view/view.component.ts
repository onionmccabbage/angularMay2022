import { Component, OnInit, Input } from '@angular/core';
import WeatherReport from '../classes/weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  @Input() inCity:string
  @Input() inCountry:string

  weatherReport:WeatherReport
  weatherDesc:string

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    // make an initial call to the weather service
    this.makeWeatherCall()
  }

  makeWeatherCall(){
    this.weatherService.getWeather(this.inCity, this.inCountry)
      .subscribe( this.handleLoadedWeather() )
  }

  handleLoadedWeather(){
    return (weatherData)=>{
      // try to get just one bit of the returned data
      this.weatherDesc = weatherData.weather[0].description
      // take all the returned data and put it into our weatherReport instance
      this.weatherReport = weatherData
    }
  }

}
