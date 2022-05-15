import { Component, DoCheck, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { dataWeatherApi } from 'src/app/interfaces/api';
import { FlyApiService } from 'src/app/services/fly-api.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, DoCheck {
  constructor(public activeModal: NgbActiveModal, private flyApi: FlyApiService, public loginModal: NgbModal, private weatherApi: WeatherApiService) { }
  distance: number;
  typeOfPlane: number;
  weatherDestination:dataWeatherApi;
  icoClass:string;
  icoUrl:string;
  openSm() {
    if(this.flyApi.passangerFlag){
      this.loginModal.open(LoginComponent, { size: 'sm' });
    }else{
      alert("Nie wszystkie miejsca zostały wybrane!")
    }
  }

  ngOnInit(): void {
    this.weatherApi.getApiDataDestination().subscribe({
      next: data => this.weatherDestination = data,
      error: err => console.log(err),
      complete: () => {return this.weatherDestination}
    })
    this.distance = this.flyApi.destini
    switch (true) {
      case this.distance < 500:
        this.typeOfPlane = 1;
        break
      case this.distance < 1500:
        this.typeOfPlane = 2;
        break
      case this.distance > 1500:
        this.typeOfPlane = 3;
        break
    }
    
  }
ngDoCheck(): void {
  this.icoUrl = this.weatherDestination.current.weather[0].icon
  console.log(this.icoUrl);
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
