import { UserReqres } from './../models/user-reqres';
import { MensajeUsuario } from './../models/MensajeUsuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  private urlFakeRes: string;
  private urlReuq: string;
  //HttpClient, permite realizar peticiones ajax
  constructor(public httpClient: HttpClient) {
    this.urlFakeRes = 'https://jsonplaceholder.typicode.com/posts/';
    this.urlReuq = 'https://reqres.in/api';
  }

  getUser(titleId: string): Observable<any> {
    console.log('Request is sent!');
    return this.httpClient.get<any>(`${this.urlFakeRes}/${titleId}`);
  }

  addUser(user: UserReqres): Observable<UserReqres> {
    let jsonUser = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post<UserReqres>(`${this.urlReuq}/users`, jsonUser, { headers: headers });
  }

}
