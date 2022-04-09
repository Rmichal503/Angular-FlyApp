import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FlyApiService } from 'src/app/services/fly-api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() my_modal_title: any;
  @Input() my_modal_content: any;
  constructor(public activeModal: NgbActiveModal, private flyApi:FlyApiService) { }
distance:any

  ngOnInit(): void {
    this.distance = this.flyApi.destini
  }

}
