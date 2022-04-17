import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.scss']
})
export class WeatherApiComponent implements OnInit {

  constructor(private weatherApi: WeatherApiService) { }

  ngOnInit(): void {
    
  }
  apiDataOrigin: any = [];
  apiDataDestination: any = [];
  getWeatherOrigin() {
    
  }
  getWeatherDestination() {
    this.weatherApi.getApiDataDestination().subscribe(data => {
      this.apiDataDestination = data
      console.log(this.apiDataDestination);
    })
  }
  // this.http.get(apiUrl).subscribe(
  //   (value) => { console.log('Received value: ', value) },
  //   (error) => { console.log('Error!!', error) },
  //   () => { console.log('End of values') }
  // );
// }
}
