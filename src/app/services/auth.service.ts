import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../models/user';
import { JwtResponse } from './../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable()
export class AuthService {

  AUTH_SERVER: string = 'https://7zkz4pklmj.execute-api.us-east-2.amazonaws.com/dev';
  authSubject = new BehaviorSubject(false);
  
  constructor(private httpClient: HttpClient) { }

  login(user : User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/login`, user).pipe(tap(
      (res : JwtResponse) => {
        if(res){
          localStorage.setItem("NOMBRE", res[0].nombre);
          localStorage.setItem("EDAD", String(res[0].edad));
          localStorage.setItem("USUARIO", res[0].usuario);
        }
      }
    ))
  }

  register(user : User) : Observable<JwtResponse> {
    console.log(user);
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/register`, user).pipe(tap(
      (res : JwtResponse) => {
        if(res){
          console.log("sdfsd");
        }
      }
    ))
  }
}
