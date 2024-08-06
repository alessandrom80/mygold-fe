
import { Color } from "@swimlane/ngx-charts";
import { IPieChartData } from "../interfaces/IPieChartData";



export class TotalWallet implements IPieChartData{
    public label:string="Label"
    public view:[number,number] = [100,100];
    public scheme:string|Color = {domain: ['#b18e33', '#26a17b']} as Color;
    public result:any;
    public select:any = (ev:any)=>{
        console.log(this.label, ev);
    };
}