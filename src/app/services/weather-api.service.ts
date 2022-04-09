import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }

  url: string = 'https://api.openweathermap.org/data/2.5/onecall?'
  public cityOrigin: any;
  public cityDestination: any;
  private cor:number[]=[];
  private corDep:number[]=[];

  getApiDataOrigin() {
    switch (this.cityOrigin) {
      case "WAW":
          this.cor = [52.13, 21];
          break;
      case "GDN":
          this.cor = [54.20, 18.38];
          break;
      case "LUZ":
          this.cor = [51.15, 22.34];
          break;
  }
    const params = {
      units: 'metric',
      lang: 'pl',
      lat: this.cor[0],
      lon: this.cor[1],
      appid: 'bddc87fdce5b5075859731a0bcca95b9'
    }
    return this.http.get<any>(this.url, { params })
  }

  getApiDataDestination():Observable<any> {
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
    return this.http.get<any>(this.url, { params })
  }

}
