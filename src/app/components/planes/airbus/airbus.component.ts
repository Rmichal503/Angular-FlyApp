import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { passangerObj } from 'src/app/interfaces/api';
import { FlyApiService } from 'src/app/services/fly-api.service';

@Component({
  selector: 'app-airbus',
  templateUrl: './airbus.svg',
  styleUrls: ['./airbus.component.scss']
})
export class AirbusComponent implements AfterViewInit {
  @ViewChildren('ico_premium, ico_first, ico_main') public seats: QueryList<AirbusComponent>
  nativeElement: any;
  passangers: number;
  count: number = 0;
  passangersArray:Array<passangerObj> =[];
  passangerObj:passangerObj;

  costOfSeat: number;
  seatNumber: string;
  constructor(private flyApi: FlyApiService) { }
  svgClick(e: any) {
    let passangerObj = {
      seatNumber: '',
      price: 0,
      typeOfSeat: ''
    };
    this.seatNumber = e.path[1].attributes[4].value;
    const price = this.flyApi.ticketPrice;
    //function to deleteSeats from passangerObj
    function deleteSeat(seat: string, passSeats: Array<passangerObj>): Array<passangerObj> {
      const indexOfDeleteSeat = passSeats.findIndex((obj: { seatNumber: string, price: number }) => {
        return obj.seatNumber === seat;
      });
      return passSeats = passSeats.splice(indexOfDeleteSeat, 1);
    }
    //checking if user choose exact number of seats
    if (this.count < this.passangers) {
      switch (e.path[1].attributes[2].value) {
        case "url(#taken)":
          alert('To miejsce jest juz zajete')
          break
        case "url(#mask-2)":
          e.path[1].attributes[2].value = "url(#choosen)"
          this.count++
          //checking type of choosen seat
          switch (e.path[1].attributes[1].value) {
            case "main":
              this.costOfSeat = price;
              break;
            case "premium":
              this.costOfSeat = Math.floor(price * 1.3);
              break;
            case "first":
              this.costOfSeat = Math.floor(price * 1.6);
              break;
          }
          console.log(e.path[1].attributes[1].value);
          console.log(this.costOfSeat);
          console.log(this.seatNumber);
          console.log(this.passangersArray);
          
          passangerObj.seatNumber = this.seatNumber;
          passangerObj.price = this.costOfSeat
          passangerObj.typeOfSeat = e.path[1].attributes[1].value;
          console.log(passangerObj);
          this.passangersArray.push(passangerObj)
          break
        case "url(#choosen)":
          e.path[1].attributes[2].value = "url(#mask-2)"
          --this.count
          this.flyApi.passangerFlag = false;
          deleteSeat(this.seatNumber, this.passangersArray);
          break
      }
      //condition to pass user to next step
      this.count === this.passangers ? this.flyApi.passangerFlag = true :
      console.log(this.count);
      console.log(this.passangersArray)
    } else {
      console.log(this.count);
      this.flyApi.passangerFlag = true;
      switch (e.path[1].attributes[2].value) {
        case "url(#taken)":
          alert('To miejsce jest juz zajete')
          break
        case "url(#mask-2)":
          alert("Nie możesz zaznaczyć więcej miejsc niż liczba pasażerów");
          break
        case "url(#choosen)":
          e.path[1].attributes[2].value = "url(#mask-2)"
          --this.count
          this.flyApi.passangerFlag = false;
          deleteSeat(this.seatNumber, this.passangersArray);
          break
      }
      console.log(this.passangersArray)
    }
    //passing obj of passanger to flyApi service
    this.flyApi.passangersArray = this.passangersArray
    console.log(this.flyApi.passangersArray);
  }

  ngAfterViewInit() {
    // const mediaQuerry = window.matchMedia('(max-width:576px)')
    this.passangers = +this.flyApi.passangersCount;
    this.seats.forEach(el => {
      //randomly generating "taken" seats
      if ((Math.floor(Math.random() * (3 - 1)) + 1) === 1) {
        el.nativeElement.attributes[2].value = "url(#taken)"
      }
    })
  }
}
