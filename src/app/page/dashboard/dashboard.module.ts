import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TradingViewModule } from 'src/app/components/dashboard/tradingview/tradingview.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { PieChartModule } from './components/pie-chart/pie-chart.module';
import { BarChartModule } from './components/bar-chart/bar-chart.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    NgxChartsModule,
    TradingViewModule,
    HeaderModule,
    PieChartModule,
    BarChartModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
