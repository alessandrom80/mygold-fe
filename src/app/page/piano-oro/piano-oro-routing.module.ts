import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PianoOroPage } from './piano-oro.page';

const routes: Routes = [
  {
    path: '',
    component: PianoOroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PianoOroPageRoutingModule {}
