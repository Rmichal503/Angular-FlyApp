import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { FlyApiService } from 'src/app/services/fly-api.service';

@Component({
  selector: 'app-embraer',
  templateUrl: './emb.svg',
  styleUrls: ['./embraer.component.scss']
})
export class EmbraerComponent implements AfterViewInit {
  @ViewChildren('ico_premium, ico_first, ico_main') public seats: QueryList<EmbraerComponent>
  nativeElement: any;
  passangers: number;
  count: number = 0;
  passangersArray: string[] = []
  constructor(public flyApi: FlyApiService) { }
  svgClick(e: any) {
    const seatNumber = e.path[1].attributes[3].value
    function deleteSeat(seat: string, passSeats: Array<string>): Array<string> {
      const indexOfDeleteSeat = passSeats.indexOf(seat);
      return passSeats = passSeats.splice(indexOfDeleteSeat, 1);
    }
    console.log(this.count);
    console.log(e);
    console.log(e.path[1].attributes[3].value)//DataNumb
    console.log(e.path[1].attributes[2].value)
    if (this.count < this.passangers) {
      switch (e.path[1].attributes[1].value) {
        case "url(#taken)":
          alert('To miejsce jest juz zajete')
          break
        case "url(#mask-2)":
          e.path[1].attributes[1].value = "url(#choosen)"
          this.count++
          this.passangersArray.push(seatNumber)
          break
        case "url(#choosen)":
          e.path[1].attributes[1].value = "url(#mask-2)"
          deleteSeat(seatNumber, this.passangersArray);
          --this.count
          break
      }
      console.log(this.count);
    } else {
      console.log(this.count);
      switch (e.path[1].attributes[1].value) {
        case "url(#taken)":
          alert('To miejsce jest juz zajete')
          break
        case "url(#mask-2)":
          alert("Nie możesz zaznaczyć więcej miejsc niż liczba pasażerów");
          break
        case "url(#choosen)":
          e.path[1].attributes[1].value = "url(#mask-2)"
          deleteSeat(seatNumber, this.passangersArray);
          --this.count
          break
      }
      this.flyApi.passangersArray = this.passangersArray
    }

  }
  ngAfterViewInit() {
    this.passangers = +this.flyApi.passangersCount;
    console.log(this.seats.toArray());
    this.seats.forEach(el => {
      if ((Math.floor(Math.random() * (3 - 1)) + 1) === 1) {
        el.nativeElement.attributes[1].value = "url(#taken)"
      }
    })
  }
}




