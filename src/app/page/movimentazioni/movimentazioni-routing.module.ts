import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovimentazioniPage } from './movimentazioni.page';

const routes: Routes = [
  {
    path: '',
    component: MovimentazioniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovimentazioniPageRoutingModule {}
