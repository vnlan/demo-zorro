import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class serviceUser {

  url = 'http://localhost:8080/customers/pagination';

  constructor(public http: HttpClient) { }


  getRandomNameList(pagenumber:number, pagesize:number): Observable<string[]> {return  this.http.get(
    `${this.url}/${pagenumber}/${pagesize}`)
    .pipe(map((res: any) => res.customers))
    .pipe(map((list: any) => {
      return list.map((item: any) => `${item.name}`);
    })
  );}

}
