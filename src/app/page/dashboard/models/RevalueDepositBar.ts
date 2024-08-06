import { Color } from "@swimlane/ngx-charts";
import { IBarChartData } from "../interfaces/IBarChartData";

export class RevalueDepositBar implements IBarChartData{
    public label!: string;
    public view!: [number, number];
    public scheme!: string | Color;
    public result: any;
    public select: any;
    public multi!: { name: string; series: 
                        { name: string; value: number; }[] 
                   }[];
    
}