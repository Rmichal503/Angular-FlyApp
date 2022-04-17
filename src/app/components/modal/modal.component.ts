import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlyApiService } from 'src/app/services/fly-api.service';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal, private flyApi:FlyApiService, private weatherApi:WeatherApiService, public loginModal:NgbModal) { }
distance:any
typeOfPlane:number
openSm() {
  this.loginModal.open(LoginComponent, { size: 'sm' });
}

  ngOnInit(): void {
    this.distance = this.flyApi.destini
    this.weatherApi.getApiDataOrigin().subscribe(data => {
      console.log(data);
    })
    switch(true){
      case this.distance < 500:
        this.typeOfPlane = 1;
        break
      case this.distance < 1500:
        this.typeOfPlane = 2;
        break
      case this.distance>1500:
        this.typeOfPlane = 3;
        break
    }
  }

}
