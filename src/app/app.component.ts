import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'mail' },
    { title: 'Deposito', url: '/deposito', icon: 'paper-plane' },
    { title: 'Lingotti', url: '/lingotti', icon: 'heart' },
    { title: 'Piano Oro', url: '/piano-oro', icon: 'archive' },
    { title: 'Movimentazioni', url: '/movimentazioni', icon: 'trash' },
    { title: 'Website', url: '/website', icon: 'warning' },
  ];
  constructor() {}
}
