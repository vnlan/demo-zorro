import { NgModule } from '@angular/core';

import { GridRoutingModule } from './grid-routing.module';

import { GridComponent } from './grid.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  imports: [
    GridRoutingModule,
    NzGridModule,
    NzDividerModule
  ],
  declarations: [GridComponent],
  exports: [GridComponent]
})
export class GridModule { }
