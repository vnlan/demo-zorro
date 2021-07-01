import {Component, OnInit} from '@angular/core';
import {serviceUser} from "./service/service";
import {BehaviorSubject, Observable} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-selectonload',
  templateUrl: './selectonload.component.html',
  styleUrls: ['./selectonload.component.css']
})
export class SelectonloadComponent implements OnInit {

  optionList: string[] = [];
  pagenumber: number = 0;
  pagesize: number = 9;
  selectedUser = null;
  isLoading = false;
  searchChange$ = new BehaviorSubject('');
  // tslint:disable:no-any

  loadMore(): void {
    this.isLoading = true;
    this.ser.getRandomNameList(this.pagenumber,this.pagesize).subscribe(data => {
      this.isLoading = false;
      this.optionList = [...this.optionList, ...data];
      console.log(this.optionList);
      this.pagenumber+=1;
    });
  }


  constructor( public ser: serviceUser) {}
  ngOnInit(): void {
    this.loadMore();
  }
}
