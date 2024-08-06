
import { TotalWallet } from './models/TotalWallet';
import { Component, OnInit } from '@angular/core';
import { Color } from "@swimlane/ngx-charts";
import { RevalueDepositBar } from './models/RevalueDepositBar';
import { RevaluateDepositPie } from './models/RevaluateDepositPie';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 totalWallet:TotalWallet = new TotalWallet();
 revaluateDepositPie:RevaluateDepositPie = new RevaluateDepositPie();
 revaluateDepositBar:RevalueDepositBar = new RevalueDepositBar();


  constructor() { }
  single = [
    {
      "name": "Oro",
      "value": 200
    }
  ];

  
  

  view: [number,number] = [200, 200];
  colorScheme:any = {
    domain: ['#b18e33', '#26a17b']
  };
  legendPosition:string =  'below';
  userWallets: any;


  ngOnInit() {
    this.totalWallet.scheme = {
      domain: ['#b18e33', '#26a17b']
    } as Color;
    this.totalWallet.view = [600, 200];
    this.totalWallet.scheme = this.colorScheme;
    this.totalWallet.label = "label";
    this.totalWallet.result = [ {
      name : "Oro",
      value : 543
    }]

    this.revaluateDepositPie.scheme = {
      domain: ['#b18e33', '#000000']
    } as Color;
    this.revaluateDepositPie.view = [600, 200];
    //this.revaluateDepositPie.scheme = this.colorScheme;
    this.revaluateDepositPie.label = "label";
    this.revaluateDepositPie.result = [ 
      {
        name : "Rivalutazione ottobre",
        value : 40
      },
      {
        name : "Rivalutazione totali",
        value : 60
      }]

    this.userWallets = [
                    
      {"name":"Oro","value":200}
      //{"name":"GPT","value":0},
      //{"name":"USDT", "value":0}
    ]

    this.revaluateDepositBar.scheme = {
      domain: ['#b18e33', '#26a17b']
    } as Color;
    this.revaluateDepositBar.view = [200, 150];
    this.revaluateDepositBar.multi = [
      {
        name:"",
        series:[{
            name:"2010",
            value:7   
          },
          {
            name:"2011",
            value:8   
          },
          {
            name:"2012",
            value:6   
          },
          {
            name:"2013",
            value:6   
          },
          {
            name:"2014",
            value:6   
          }]
      }];

   
  }
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
  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
