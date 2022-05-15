import { Component, OnInit } from '@angular/core';
import { FlyApiService } from 'src/app/services/fly-api.service';

@Component({
  selector: 'app-sum-up',
  templateUrl: './sum-up.component.html',
  styleUrls: ['./sum-up.component.scss']
})
export class SumUpComponent implements OnInit {

  constructor(private flyApi:FlyApiService) { }
ticketData:any = this.flyApi.passangersArray
  ngOnInit(): void {
    
  }

}
