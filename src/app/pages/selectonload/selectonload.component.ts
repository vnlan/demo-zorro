import { Component, OnInit } from '@angular/core';
import {user} from "./model/user";
import {serviceUser} from "./service/service";

@Component({
  selector: 'app-selectonload',
  templateUrl: './selectonload.component.html',
  styleUrls: ['./selectonload.component.css']
})
export class SelectonloadComponent implements OnInit {

  randomUserUrl = "https://api.randomuser.me/?results=10";
  optionList: user[] = [];
  selectedUser = null;
  isLoading = false;

  // tslint:disable:no-any


  loadMore():void{
    this.isLoading = true;
    this.ser.getInfor().subscribe((res:user[]) => {
      this.isLoading = false;
      this.optionList = [...this.optionList, ...res];
    });
  }
  constructor( public ser: serviceUser) {}
  ngOnInit(): void {
    this.loadMore();
  }
}
