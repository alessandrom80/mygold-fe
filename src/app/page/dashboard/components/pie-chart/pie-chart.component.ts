import { Component, Input, OnInit } from '@angular/core';
import { IPieChartData } from '../../interfaces/IPieChartData';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent  implements OnInit {

  constructor() { }
  @Input() valueFormattingMethod:any;
  @Input() label:string ="";
  @Input() percentageFormattingMethod:any;
  @Input() onSelectMethod:any;
  @Input() pieChartData!:IPieChartData;
  @Input() animations:boolean = false;
  @Input() gradient:boolean = true;
  ngOnInit() {}
  percentageFormatting(c:any) {
    //per avere solo due cifre decimali dopo lo zero
    return c.toFixed(2);
  }
  valueFormatting(value:number):string{
    
    return value.toFixed(2);
  }
  onSelect(event:any) {
    console.log(event);
  }
}
