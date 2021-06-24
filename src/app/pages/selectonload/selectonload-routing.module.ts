import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectonloadComponent} from "./selectonload.component";

const routes: Routes = [
  { path: '', component: SelectonloadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectonloadRoutingModule { }
