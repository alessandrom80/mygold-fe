import { Component, Input, OnInit } from '@angular/core';
import { IBarChartData } from '../../interfaces/IBarChartData';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent  implements OnInit {

  constructor() { }
  @Input() showXAxis: boolean = true;
  @Input() showYAxis: boolean = true;
  @Input() gradient: boolean = true;
  @Input() showLegend: boolean = false;
  @Input() showXAxisLabel: boolean = true;
  @Input() xAxisLabel: string = '';
  @Input() showYAxisLabel: boolean = true;
  @Input() yAxisLabel: string = '';
  @Input() legendTitle: string = 'Years';
  @Input() barChartData!: IBarChartData;
  ngOnInit() {}
  onSelect(event:any) {
    console.log(event);
  }
  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
