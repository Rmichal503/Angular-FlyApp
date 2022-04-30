import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  passCheck: boolean = false;

  constructor(private json: HttpClient) { }
  url: string = 'https://mocki.io/v1/bf2098bb-1a4e-4772-9307-b5f60d0035ba'
  check(login: string, pass: string) {
    this.json.get<any>(this.url).subscribe(data => {
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
  // logIn(login: string, pass: string) {
  //   this.xhr.open('GET', 'https://mocki.io/v1/bf2098bb-1a4e-4772-9307-b5f60d0035ba');
  //   this.xhr.responseType = 'json';
  //   this.xhr.send();
  //   this.xhr.onload = function () {
  //     console.log(this.response);
  //     this.response.forEach((el: any) => {
  //       if (login === el.username && pass === el.password) {
  //         console.log(`${login} || ${pass}`);
  //       } else {
  //         console.log(el.password);
  //       }
  //     })
  //   }
  // "username":"Bret","password":"Terb528"
  // }
}



