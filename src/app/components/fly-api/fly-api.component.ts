import { Component, OnInit } from '@angular/core';
import { FlyApiService } from 'src/app/services/fly-api.service';

@Component({
  selector: 'app-fly-api',
  templateUrl: './fly-api.component.html',
  styleUrls: ['./fly-api.component.scss']
})
export class FlyApiComponent implements OnInit {

  constructor(private flyApi: FlyApiService) { }

  ngOnInit(): void {
  }
  apiData: any = []
  dataApi(origin:string,destination:string,ccy:string) {
    this.flyApi.getApiData(origin,destination,ccy).subscribe(data => {
      this.apiData = data;
      console.log(data);
    })
  }
}
