import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { PieChartComponent } from "./pie-chart.component";
import { DinamicTopDirective } from "./dinamic-top.directive";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      NgxChartsModule,

    ],
    declarations: [PieChartComponent, DinamicTopDirective],
    exports:[PieChartComponent]
  })
  export class PieChartModule {}