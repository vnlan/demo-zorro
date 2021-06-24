import { NgModule } from '@angular/core';

import { SpaceRoutingModule} from "./space-routing.module";
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { SpaceComponent} from "./space.component";
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [
    SpaceRoutingModule,
    NzGridModule,
    NzDividerModule,
    NzSpaceModule,
    NzCardModule,
    NzRadioModule,
    FormsModule,
    NzButtonModule
  ],
  declarations: [SpaceComponent],
  exports: [SpaceComponent]
})
export class SpaceModule { }
