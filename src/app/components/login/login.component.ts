import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlyApiService } from 'src/app/services/fly-api.service';
import { LoginService } from 'src/app/services/login.service';
import { SumUpComponent } from '../sum-up/sum-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private mongo: LoginService,
    private flyApi: FlyApiService, 
    public modal: NgbActiveModal, 
    public sumUp: NgbModal) { }
  ngOnInit(): void {
  }
  
  singUp(login: string, pass: string){
    if(login ===''&& pass ===''){
      return
    }
    console.log(login, pass);
    this.mongo.createUser(login,pass)
  }

  logIn(login: string, pass: string) {
    // this.mongo.check(login, pass)
    this.mongo.login(login,pass)
    setTimeout(() => {
      if (this.mongo.passCheck) {
        this.flyApi.passangersArray ? this.sumUp.open(SumUpComponent, { size: "md", centered:true }) : null
      }
    }, 200);
    this.modal.close()
    this.mongo.passCheck = false;
    // if (this.mongo.passCheck) {
    //   this.sumUp.open(SumUpComponent, { size: "md" })
    // }
    // this.modal.close()
  }
}
