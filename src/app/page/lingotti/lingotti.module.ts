import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LingottiPageRoutingModule } from './lingotti-routing.module';

import { LingottiPage } from './lingotti.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LingottiPageRoutingModule,
    HeaderModule
  ],
  declarations: [LingottiPage]
})
export class LingottiPageModule {}
