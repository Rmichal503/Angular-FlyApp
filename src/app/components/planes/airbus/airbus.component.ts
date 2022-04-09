import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-airbus',
  templateUrl: './airbus.svg',
  styleUrls: ['./airbus.component.scss']
})
export class AirbusComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  svgClick(e: any) {
    console.log(e.path[1].attributes[2].value)
  }
  ngOnInit(): void {
  }
}
