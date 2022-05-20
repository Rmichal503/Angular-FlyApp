import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login.service';
import { SumUpComponent } from '../sum-up/sum-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private mongo: LoginService, public modal: NgbActiveModal, public sumUp: NgbModal) { }
  ngOnInit(): void {
  }

  logIn(login: string, pass: string) {
    this.mongo.check(login, pass)
    setTimeout(() => {
      if (this.mongo.passCheck) {
        this.sumUp.open(SumUpComponent, { size: "md", centered:true })
        this.modal.close()
      }
    }, 1000);
    this.mongo.passCheck = false;
    // if (this.mongo.passCheck) {
    //   this.sumUp.open(SumUpComponent, { size: "md" })
    // }
    // this.modal.close()
  }
}
