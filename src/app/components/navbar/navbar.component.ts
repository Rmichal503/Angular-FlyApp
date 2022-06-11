import { Component, DoCheck} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements DoCheck {

  constructor(private loginModal: NgbModal, private mongo: LoginService) { }
  login() {
    this.loginModal.open(LoginComponent, { size: 'sm' });
  }
  token:string;
  ngDoCheck(): void {
    this.token = this.mongo.token
  }

}
