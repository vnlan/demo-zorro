import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {LayoutRoutingModule} from "./layout-routing.module";
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({

  imports: [
    LayoutRoutingModule,
    NzGridModule,
    NzSelectModule,
    NzLayoutModule,
    HttpClientModule,
    NzSpinModule,
    FormsModule,
    ScrollingModule,
    HttpClientJsonpModule,
    CommonModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule { }
