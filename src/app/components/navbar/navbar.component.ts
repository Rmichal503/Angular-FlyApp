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
  logout(){
    if(confirm('Czy napewno chcesz się wylogować')){
      this.mongo.isLogin = false;
      this.mongo.passCheck=false;
      this.mongo.token='';
    }
  }
  loged:boolean;
  
  ngDoCheck(): void {
    console.log(this.loged)
    this.loged = this.mongo.isLogin
  }

}
