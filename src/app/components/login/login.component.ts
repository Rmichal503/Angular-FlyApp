import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private mongo: LoginService, public modal:NgbActiveModal) { }
  ngOnInit(): void {
  }

  logIn(login: string, pass: string) {
    this.mongo.check(login, pass)
    // this.modal.close()
  }
}
