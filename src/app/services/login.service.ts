import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authData } from '../interfaces/api';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  passCheck: boolean = false;
  token: string;

  constructor(private http: HttpClient) { }

  createUser(userName:string, password:string){
    const authData: authData = {user: userName, password:password};
    this.http.post('http://localhost:3000/api/user/signup', authData).subscribe(response=>{
      console.log(response);
    })
  }

  login(userName:string, password:string){
    const authData: authData = {user: userName, password:password};
    this.http.post<{token:string}>('https://angular-node-fly.herokuapp.com/api/user/login', authData).subscribe(response=>{
      console.log(response);
      this.token = response.token;
      this.passCheck = true;
    })
  }

  // url: string = 'https://mocki.io/v1/bf2098bb-1a4e-4772-9307-b5f60d0035ba'
  // check(login: string, pass: string) {
  //   this.http.get<Login>(this.url).subscribe(data => {
  //     // console.log(`data: ${data}`);
  //     // console.log(login, pass);
  //     data.forEach((el: any) => {
  //       if (login === el.username && pass === el.password) {
  //         // console.log(`${login} || ${pass}`);
  //         alert("logowanie przebiegło pomyślnie")
  //         this.passCheck = true;
  //       }
  //     })
  //     if(this.passCheck === false){
  //       alert("błędne hasło");
  //     }
  //   })
  // }
}



