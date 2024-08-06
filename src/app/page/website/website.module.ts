import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebsitePageRoutingModule } from './website-routing.module';

import { WebsitePage } from './website.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebsitePageRoutingModule,
    HeaderModule
  ],
  declarations: [WebsitePage]
})
export class WebsitePageModule {}
