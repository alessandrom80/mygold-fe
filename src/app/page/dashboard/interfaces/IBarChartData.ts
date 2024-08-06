import { Color } from "@swimlane/ngx-charts";
export interface IBarChartData{
    label:string;
    view:[number,number];
    scheme:string|Color;
    result:any;
    select:any ;
    multi:{name:string, series:{name:string,value:number}[]}[];
}