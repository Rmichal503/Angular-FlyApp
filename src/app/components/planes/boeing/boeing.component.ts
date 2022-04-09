import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-boeing',
  templateUrl: './boeing.svg',
  styleUrls: ['./boeing.component.scss']
})
export class BoeingComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  svgClick(e: any) {
    console.log(e)
  }
  ngOnInit(): void {
  }

}
