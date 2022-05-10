import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  passCheck: boolean = false;

  constructor(private json: HttpClient) { }
  url: string = 'https://mocki.io/v1/bf2098bb-1a4e-4772-9307-b5f60d0035ba'
  check(login: string, pass: string) {
    this.json.get<Login>(this.url).subscribe(data => {
      console.log(`data: ${data}`);
      console.log(login, pass);
      data.forEach((el: any) => {
        if (login === el.username && pass === el.password) {
          console.log(`${login} || ${pass}`);
          alert("logowanie przebiegło pomyślnie")
          this.passCheck = true;
        }
      })
      if(this.passCheck === false){
        alert("błędne hasło");
      }
    })
  }
}



