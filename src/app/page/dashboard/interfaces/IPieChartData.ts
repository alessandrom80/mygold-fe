import { Color } from "@swimlane/ngx-charts";
export interface IPieChartData{
    label:string;
    view:[number,number];
    scheme:string|Color;
    result:any;
    select:any ;
}