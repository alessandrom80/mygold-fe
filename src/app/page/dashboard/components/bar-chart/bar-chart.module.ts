import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { BarChartComponent } from "./bar-chart.component";


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      NgxChartsModule,

    ],
    declarations: [BarChartComponent],
    exports:[BarChartComponent]
  })
  export class BarChartModule {}