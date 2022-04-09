import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-embraer',
  // templateUrl: './embraer.component.html',
  templateUrl: './emb.svg',
  styleUrls: ['./embraer.component.scss']
})
export class EmbraerComponent {
  constructor(public activeModal: NgbActiveModal) { }
  svgClick(e: any) {
    console.log(e.path[0].attributes[2].value)
  }
}


  // ngAfterViewInit() {
  //   console.log(this.ico_main.nativeElement.value)
  // }

