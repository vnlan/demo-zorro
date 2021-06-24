import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {user} from "../model/user";
@Injectable({
  providedIn: 'root'
})
export class serviceUser {

  url = 'http://my-json-server.typicode.com/joker71/user/user';
  constructor(public http: HttpClient) { }

  getInfor(): Observable<user[]> {
    return this.http.get<user[]>(this.url);
  }
}
