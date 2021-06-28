import { NgModule } from '@angular/core';
import { SelectonloadComponent} from "./selectonload.component";
import { NzGridModule } from 'ng-zorro-antd/grid';
import {SelectonloadRoutingModule} from "./selectonload-routing.module";
import { NzSelectModule } from 'ng-zorro-antd/select';
import { HttpClientModule } from "@angular/common/http";
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@NgModule({

  imports: [
    SelectonloadRoutingModule,
    NzGridModule,
    NzSelectModule,
    HttpClientModule,
    NzSpinModule,
    FormsModule,
    CommonModule
  ],
  declarations: [SelectonloadComponent],
  exports: [SelectonloadComponent]
})
export class SelectonloadModule { }
