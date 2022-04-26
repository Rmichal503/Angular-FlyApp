import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather-origin',
  templateUrl: './weather-origin.component.html',
  styleUrls: ['./weather-origin.component.scss']
})
export class WeatherOriginComponent implements OnInit {

  constructor(private weatherApi:WeatherApiService) { }
  weather:any
  ngOnInit(): void {
    // this.weatherApi.getApiDataOrigin().subscribe({
    //   next: data => this.weather = data,
    //   error: err => console.log(err)
  //   })
  }
  
}
