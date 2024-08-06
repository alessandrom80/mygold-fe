import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovimentazioniPageRoutingModule } from './movimentazioni-routing.module';

import { MovimentazioniPage } from './movimentazioni.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovimentazioniPageRoutingModule,
    HeaderModule
  ],
  declarations: [MovimentazioniPage]
})
export class MovimentazioniPageModule {}
