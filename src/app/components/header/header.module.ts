import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashboardPageRoutingModule } from 'src/app/page/dashboard/dashboard-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TradingViewModule } from '../dashboard/tradingview/tradingview.module';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxChartsModule,
    TradingViewModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
