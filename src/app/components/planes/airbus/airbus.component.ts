import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
  constructor(private flyApi: FlyApiService) { }
  svgClick(e: any) {
    console.log(this.count);
    console.log(e);
    console.log(e.path[1].attributes[2].value)
    console.log(e.path[1].attributes[1].value)
    // e.path[0].style.fill = 'red'
    // this.seats.toArray
    // console.log(this.seats);
    if (this.count < this.passangers) {
      switch (e.path[1].attributes[1].value) {
        case "red":
          alert('To miejsce jest juz zajete')
          break
        case "#43A9C7":
          e.path[1].attributes[1].value = "green"
          this.count++
          break
        case "#00416B":
          this.count++
          e.path[1].attributes[1].value = "green"
          break
        case "green":
          e.path[1].attributes[1].value = "blue"
          --this.count
          break
      }
      console.log(this.count);
    } else {
      console.log(this.count);
      switch (e.path[1].attributes[1].value) {
        case "red":
          alert('To miejsce jest juz zajete')
          break
        case "#43A9C7":
          alert("Nie możesz zaznaczyć więcej miejsc niż liczba pasażerów");
          break
        case "#00416B":
          alert("Nie możesz zaznaczyć więcej miejsc niż liczba pasażerów");
          break
        case "green":
          e.path[1].attributes[1].value = "blue"
          --this.count
          break
      }
    }

  }
  // ngOnInit(): void {
  // }

  ngAfterViewInit() {
    // .[0].nativeElement.attributes[1].value
    this.passangers = +this.flyApi.passangersCount;
    console.log(this.seats.toArray());
    this.seats.forEach(el => {
      if ((Math.floor(Math.random() * (3 - 1)) + 1) === 1) {
        el.nativeElement.attributes[1].value = "red"
      }
      // console.log(el)
    })
  }

}
