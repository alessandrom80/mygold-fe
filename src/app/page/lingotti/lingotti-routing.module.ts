import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LingottiPage } from './lingotti.page';

const routes: Routes = [
  {
    path: '',
    component: LingottiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LingottiPageRoutingModule {}
