import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PianoOroPageRoutingModule } from './piano-oro-routing.module';

import { PianoOroPage } from './piano-oro.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    PianoOroPageRoutingModule
  ],
  declarations: [PianoOroPage]
})
export class PianoOroPageModule {}
