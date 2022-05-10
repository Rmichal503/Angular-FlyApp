import { Component, DoCheck, OnInit } from '@angular/core';
import { dataWeatherApi } from 'src/app/interfaces/api';
import { WeatherApiService } from 'src/app/services/weather-api.service';


@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.scss']
})
export class WeatherApiComponent implements OnInit, DoCheck {

  constructor(private weatherApi: WeatherApiService) { }
  weather: dataWeatherApi
  icoUrl: string
  icoClass: string;
  ngOnInit(): void {
    this.weatherApi.geolok()
  }
  ngDoCheck(): void {
    this.weather = this.weatherApi.weatherOrigin;
    this.icoUrl = this.weatherApi.weatherOrigin.current.weather[0].icon
    switch (this.icoUrl) {
      case "01d":
        this.icoClass = 'bi bi-brightness-high'
        break;
      case "02d":
        this.icoClass = 'bi bi-cloud-sun'
        break;
      case "03d":
        this.icoClass = 'bi bi-cloudy'
        break;
      case "04d":
        this.icoClass = 'bi bi-clouds'
        break;
      case "09d":
        this.icoClass = 'bi bi-cloud-drizzle'
        break;
      case "10d":
        this.icoClass = 'bi bi-cloud-rain'
        break;
      case "11d":
        this.icoClass = 'bi bi-cloud-lightning-rain'
        break;
      case "13d":
        this.icoClass = 'bi bi-snow3'
        break;
      case "50d":
        this.icoClass = 'bi bi-cloudy-fog2'
        break;
      case "01n":
        this.icoClass = 'bi bi-moon'
        break;
      case "02n":
        this.icoClass = 'bi bi-cloud-moon-fill'
        break;
      case "03n":
        this.icoClass = 'bi bi-cloudy-fill'
        break;
      case "04n":
        this.icoClass = 'bi bi-clouds-fill'
        break;
      case "09n":
        this.icoClass = 'bi bi-cloud-drizzle-fill'
        break;
      case "10n":
        this.icoClass = 'bi bi-cloud-rain-fill'
        break;
      case "11n":
        this.icoClass = 'bi bi-cloud-lightning-rain-fill'
        break;
      case "13n":
        this.icoClass = 'bi bi-snow3-fill'
        break;
      case "50n":
        this.icoClass = 'bi bi-cloudy-fog2-fill'
        break;
    }
  }
}
