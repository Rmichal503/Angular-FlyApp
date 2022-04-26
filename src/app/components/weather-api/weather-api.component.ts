import { AsyncPipe } from '@angular/common';
import { core } from '@angular/compiler';
import { Component, DoCheck, OnInit } from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';


@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.scss']
})
export class WeatherApiComponent implements OnInit, DoCheck {

  constructor(private weatherApi: WeatherApiService) { }
  weather:any
  ngOnInit(): void {
    this.weatherApi.geolok()
  }
  ngDoCheck(): void {
    this.weather = this.weatherApi.weatherOrigin;
  }
}
