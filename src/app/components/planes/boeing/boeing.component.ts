import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { passangerObj } from 'src/app/interfaces/api';
import { FlyApiService } from 'src/app/services/fly-api.service';

@Component({
  selector: 'app-boeing',
  templateUrl: './boeing.svg',
  styleUrls: ['./boeing.component.scss']
})
export class BoeingComponent implements AfterViewInit {
  @ViewChildren('ico_premium, ico_first, ico_main') public seats: QueryList<BoeingComponent>
  nativeElement: any;
  passangers: number;
  count: number = 0;
  seatNumber: string;
  passangersArray: Array<passangerObj> = []
  costOfSeat:number;
  constructor(public flyApi: FlyApiService) { }
  svgClick(e: any) {
    let passangerObj = {
      seatNumber:'', 
      price:0,
      typeOfSeat:''}
    this.seatNumber = e.path[1].attributes[4].value
    const price = this.flyApi.ticketPrice;
    function deleteSeat(seat: string, passSeats: Array<passangerObj>): Array<passangerObj> {
      const indexOfDeleteSeat = passSeats.findIndex((obj: { seatNumber: string, price:number })=>{
        return obj.seatNumber === seat;
      });
      return passSeats = passSeats.splice(indexOfDeleteSeat, 1);
    }
    console.log(this.count);
    console.log(e);
    console.log(e.path[1].attributes[4].value) //seatnumb
    console.log(e.path[1].attributes[2].value) //kolor
    if (this.count < this.passangers) {
      switch (e.path[1].attributes[2].value) {
        case "url(#taken)":
          alert('To miejsce jest juz zajete')
          break
        case "url(#mask-2)":
          e.path[1].attributes[2].value = "url(#choosen)"
          this.count++
          switch(e.path[1].attributes[1].value){
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
          console.log(this.costOfSeat);
          console.log(this.seatNumber);
          passangerObj.seatNumber = this.seatNumber;
          passangerObj.price = this.costOfSeat
          passangerObj.typeOfSeat = e.path[1].attributes[1].value;
          this.passangersArray.push(passangerObj)
          break
        case "url(#choosen)":
          e.path[1].attributes[2].value = "url(#mask-2)"
          --this.count
          deleteSeat(this.seatNumber, this.passangersArray);
          break
      }
      this.count === this.passangers ? this.flyApi.passangerFlag = true :
      console.log(this.count);
    } else {
      console.log(this.count);
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
          deleteSeat(this.seatNumber, this.passangersArray);
          break
      }
      console.log(this.passangersArray)
    }
    this.flyApi.passangersArray = this.passangersArray
  }
  ngAfterViewInit() {
    this.passangers = +this.flyApi.passangersCount;
    console.log(this.seats.toArray());
    this.seats.forEach(el => {
      if ((Math.floor(Math.random() * (3 - 1)) + 1) === 1) {
        el.nativeElement.attributes[2].value = "url(#taken)"
      }
    })
  }

}
