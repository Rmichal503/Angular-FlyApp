import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { dataWeatherApi } from '../interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient, public geo: GeolocationService) { }

  url: string = 'https://api.openweathermap.org/data/2.5/onecall?'
  cityDestination: string;
  geolocation: number[] =[]
  corDep: number[] = [];
  weatherOrigin:dataWeatherApi;
  weatherDestination:dataWeatherApi;

  geolok() {
    this.geo.pipe(take(1)).subscribe({
      next: position => this.geolocation = [position.coords.latitude,position.coords.longitude],
      error: err => console.log(err),
      complete:()=> this.getGeoWeather(this.geolocation).subscribe(data=>{
        // console.log(data);
        return this.weatherOrigin = data;
      })
    })
  }

  getGeoWeather(lok:Array<number>) {
    // console.log(lok);
    const params = {
      units: 'metric',
      lang: 'pl',
      lat: lok[0],
      lon: lok[1],
      appid: 'bddc87fdce5b5075859731a0bcca95b9'
    }
    return this.http.get<dataWeatherApi>(this.url, { params })
  }

  getApiDataDestination(): Observable<dataWeatherApi> {
    switch (this.cityDestination) {
      case "JFK":
        this.corDep = [40.43, -74];
        break;
      case "CDG":
        this.corDep = [48.86, 2.34];
        break;
      case "CPT":
        this.corDep = [-33.5131, 18.2526];
        break;
      case "BER":
        this.corDep = [52.31, 13.24];
        break;
      case "TRN":
        this.corDep = [45.04, 7.42];
        break;
      case "LAX":
        this.corDep = [34.03, -118.15];
        break;
      case "HND":
        this.corDep = [35.4123, 139.4132];
        break;
    }
    const params = {
      units: 'metric',
      lang: 'pl',
      lat: this.corDep[0],
      lon: this.corDep[1],
      appid: 'bddc87fdce5b5075859731a0bcca95b9'
    }
    return this.http.get<dataWeatherApi>(this.url, { params })
  }

  
}
