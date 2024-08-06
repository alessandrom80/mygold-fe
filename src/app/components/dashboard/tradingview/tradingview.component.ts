import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

declare const TradingView: any;
@Component({
  selector: 'app-tradingview',
  templateUrl: './tradingview.component.html',
  styleUrls: ['./tradingview.component.scss'],
})

export class TradingviewComponent  implements OnInit {
  @ViewChild('tradingview') tradingview?: ElementRef;

  constructor(private _renderer2: Renderer2) { }

 goldDollar:boolean = true;
 /*kasUsdt:boolean = false;
 btc:boolean = false;*/
  ngOnInit() { 
    
    
}

  ngAfterViewInit(){
    this.loadGoldUSDT();  
    //this.loadKasUsdt();
   //this.btcTetherUS();  
  }
  loadGoldUSDT(){
    this.goldDollar = true;
    //this.kasUsdt = false;
    //this.btc = false;

    let t = setTimeout(() => {
      let options = {
        autosize: true,
        symbol: "OANDA:XAUUSD",
        library_path: '/assets/charting_library/',
        timezone: "Etc/UTC",
        theme: "Dark",
        style: "3",
        locale: "it",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        gridColor: "rgba(0, 0, 0, 0)",
        withdateranges: false,
        range: "ytd",
        hide_side_toolbar: true,
        allow_symbol_change: true,
        show_popup_button: true,
        popup_width: "1000",
        popup_height: "650",
        no_referral_id: true,
        container_id: "tradingview-widget-container",
        hide_top_toolbar: true,
        hide_volume: true,
        fullscreen: true,
        details: true,
        backgroundColor: "rgba(0, 0, 0, 0)",
        hotlist: true,
        calendar: true,
        studies_overrides: {},
        overrides: {
          "paneProperties.backgroundType":"solid",
          "paneProperties.background": "rgba(0,0,0,0)",  // Background color with transparency  
          'mainSeriesProperties.areaStyle.color1': 'rgba(248, 234, 27, 0.5)',  // colore dell'area delimitata
          'mainSeriesProperties.areaStyle.color2': 'rgba(94, 69, 15, 0.5)',  // colore dell'area inferiore
          'mainSeriesProperties.areaStyle.linecolor': 'rgba(253, 169, 0, 1)',  // colore della linea
        }
      }
      new TradingView.widget(
        options
      );
      clearTimeout(t)
    }, 40);
  }
  /*loadKasUsdt(){
    this.goldDollar = false;
    this.kasUsdt = true;
    this.btc = false;
    let t = setTimeout(() => {
      let optionsKas = {
        autosize: true,
        symbol: "BYBIT:KASUSDT",
        library_path: '/assets/charting_library/',
        timezone: "Etc/UTC",
        theme: "Dark",
        style: "3",
        locale: "it",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        gridColor: "rgba(0, 0, 0, 0)",
        withdateranges: false,
        range: "ytd",
        hide_side_toolbar: true,
        allow_symbol_change: true,
        show_popup_button: true,
        popup_width: "1000",
        popup_height: "650",
        no_referral_id: true,
        container_id: "tradingview-widget-container-kas",
        hide_top_toolbar: true,
        hide_volume: true,
        fullscreen: true,
        details: true,
        backgroundColor: "rgba(51, 31, 4, 1)",
        hotlist: true,
        calendar: true,
        studies_overrides: {},
        overrides: {
          "paneProperties.backgroundType":"solid",
          "paneProperties.background": "rgba(43,25,3,0)",  // Background color with transparency  
          'mainSeriesProperties.areaStyle.color1': 'rgba(248, 234, 27, 0.5)',  // colore dell'area delimitata
          'mainSeriesProperties.areaStyle.color2': 'rgba(94, 69, 15, 0.5)',  // colore dell'area inferiore
          'mainSeriesProperties.areaStyle.linecolor': 'rgba(253, 169, 0, 1)',  // colore della linea
        }
      }
      new TradingView.widget(
        optionsKas
      );
      clearTimeout(t)
    }, 40);

  }
  btcTetherUS(){
    this.goldDollar = false;
    this.kasUsdt = false;
    this.btc = true;

    let t = setTimeout(() => {
      let optionsBTC = {
        autosize: true,
        symbol: "BINANCE:BTCUSDT",
        library_path: '/assets/charting_library/',
        timezone: "Etc/UTC",
        theme: "Dark",
        style: "3",
        locale: "it",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        gridColor: "rgba(0, 0, 0, 0)",
        withdateranges: false,
        range: "ytd",
        hide_side_toolbar: true,
        allow_symbol_change: true,
        show_popup_button: true,
        popup_width: "1000",
        popup_height: "650",
        no_referral_id: true,
        container_id: "tradingview-widget-container-btc",
        hide_top_toolbar: true,
        hide_volume: true,
        fullscreen: true,
        details: true,
        backgroundColor: "rgba(51, 31, 4, 1)",
        hotlist: true,
        calendar: true,
        studies_overrides: {},
        overrides: {
          "paneProperties.backgroundType":"solid",
          "paneProperties.background": "rgba(43,25,3,0)",  // Background color with transparency  
          'mainSeriesProperties.areaStyle.color1': 'rgba(248, 234, 27, 0.5)',  // colore dell'area delimitata
          'mainSeriesProperties.areaStyle.color2': 'rgba(94, 69, 15, 0.5)',  // colore dell'area inferiore
          'mainSeriesProperties.areaStyle.linecolor': 'rgba(253, 169, 0, 1)',  // colore della linea
        }
      }
      new TradingView.widget(
        optionsBTC
      );

      clearTimeout(t)
    }, 40);
  }

*/
    
}

//https://www.tradingview.com/charting-library-docs/25/core_concepts/Widget-Constructor
