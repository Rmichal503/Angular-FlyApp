import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataFlyApi } from '../interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class FlyApiService {
  destini:number;
  passangersCount:number;
  passangersArray:string[]
  ticketPrice:number;
  
  constructor(private http: HttpClient) { }
  url: string = 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/latest'
  getApiData(origin: string, destination: string, ccy: string) {
    const params = {
      destination: destination,
      origin: origin,
      period_type: 'year',
      one_way: '',
      show_to_affiliates: 'true',
      trip_class: '0',
      beginning_of_period: ``,
      currency: ccy,
      page: '1',
      sorting: 'price',
      limit: '10'
    }
    const headers = {
      'x-access-token': 'b3303e9e387bb9a1884bc33290dbd0d4',
      'x-rapidapi-host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
      'x-rapidapi-key': 'eb04fcb830msh14b53702b3df605p1d1a41jsnfbd01cbf92cf'
    }
    return this.http.get<dataFlyApi>(this.url, { headers, params })
  }
}

// /////////
// const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
//     this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular', { headers }).subscribe(data => {
//         this.totalAngularPackages = data.total;
//     })
