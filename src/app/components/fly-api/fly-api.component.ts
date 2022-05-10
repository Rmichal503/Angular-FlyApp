import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { dataWeatherApi } from 'src/app/interfaces/api';
import { FlyApiService } from 'src/app/services/fly-api.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-fly-api',
  templateUrl: './fly-api.component.html',
  styleUrls: ['./fly-api.component.scss']
})
export class FlyApiComponent implements OnInit {

  constructor(private flyApi: FlyApiService, private weatherApi: WeatherApiService, private modalServise: NgbModal) { }

  ngOnInit(): void {
    
  }
  options: NgbModalOptions = {
    size: 'lg'
  }
  public isCollapsed = true;
  apiData: any;
  weatherDestination: dataWeatherApi;
  weatherOrigin: any;
  dataApi(origin: string, destination: string, ccy: string, passangers: string,) {
    this.weatherApi.cityDestination = destination;
    this.flyApi.passangersCount = +passangers;
    if (origin && destination && ccy && passangers) {
      this.flyApi.getApiData(origin, destination, ccy).subscribe(flyData => {
        this.apiData = flyData.data;
        this.flyApi.destini = this.apiData[0].distance;
        console.log(flyData);
      })
    } else {
      alert('Nie wszystkie opcje lotu zostały wybrane!')
    }


  }
  showTicket(price: number) {
    this.flyApi.ticketPrice = price
    this.weatherApi.getApiDataDestination().subscribe({
      next: data => this.weatherDestination = data,
      error: err => console.log(err),
    })
    this.modalServise.open(ModalComponent, this.options)
  }
}
