import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/grid' },
  { path: 'grid', loadChildren: () => import('./pages/grid/grid.module').then(m => m.GridModule) },
  { path: '', pathMatch: 'full', redirectTo: '/layout' },
  { path: 'layout', loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule) },
  { path: '', pathMatch: 'full', redirectTo: '/select-on-load' },
  { path: 'select-on-load', loadChildren: () => import('./pages/selectonload/selectonload.module').then(m => m.SelectonloadModule) },
  { path: '', pathMatch: 'full', redirectTo: '/space' },
  { path: 'space', loadChildren: () => import('./pages/space/space.module').then(m => m.SpaceModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
