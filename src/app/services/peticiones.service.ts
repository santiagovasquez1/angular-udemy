import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  private urlFakeRes: string;

  //HttpClient, permite realizar peticiones ajax
  constructor(public httpClient: HttpClient) {
    this.urlFakeRes = 'https://jsonplaceholder.typicode.com/posts/';
  }

  getUser(titleId: string): Observable<any> {
    console.log('Request is sent!');
    return this.httpClient.get<any>(`${this.urlFakeRes}/${titleId}`);
  }

}
