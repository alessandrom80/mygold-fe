import { Component, OnInit } from '@angular/core';
import { TotalWallet } from '../dashboard/models/TotalWallet';
import { Color } from "@swimlane/ngx-charts";

@Component({
  selector: 'app-portafoglio',
  templateUrl: './deposito.page.html',
  styleUrls: ['./deposito.page.scss'],
})
export class DepositoPage implements OnInit {

  constructor() { }
  totalWallet:TotalWallet = new TotalWallet();
  ngOnInit() {
    this.totalWallet.scheme = {
      domain: ['#b18e33', '#26a17b']
    } as Color;
    this.totalWallet.view = [600, 200];
    this.totalWallet.label = "label";
    this.totalWallet.result = [ {
      name : "Oro",
      value : 543
    }]

  }

}
