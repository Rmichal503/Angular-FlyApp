import { Component, DoCheck, OnInit } from '@angular/core';
import { passangerObj } from 'src/app/interfaces/api';
import { FlyApiService } from 'src/app/services/fly-api.service';

@Component({
  selector: 'app-sum-up',
  templateUrl: './sum-up.component.html',
  styleUrls: ['./sum-up.component.scss']
})
export class SumUpComponent implements OnInit {

  constructor(private flyApi:FlyApiService) { }
ticketData:Array<passangerObj> = this.flyApi.passangersArray;
currency:string = this.flyApi.currency
sumUpPrice:number = 0
  ngOnInit(): void {
    this.ticketData.forEach(el=>{
          this.sumUpPrice += +el.price
        })
  }
}


