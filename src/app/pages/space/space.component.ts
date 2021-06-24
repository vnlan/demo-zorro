import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  size: 'small' | 'middle' | 'large' | any = 'small';
  constructor() { }

  ngOnInit(): void {
  }

}
