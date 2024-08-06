import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositoPageRoutingModule } from './deposito-routing.module';
import { DepositoPage } from './deposito.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { PieChartModule } from '../dashboard/components/pie-chart/pie-chart.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositoPageRoutingModule,
    HeaderModule,
    PieChartModule
  ],
  declarations: [DepositoPage]
})
export class DepositoPageModule {}
