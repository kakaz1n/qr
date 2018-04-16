import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NarracaoPage } from './narracao';

@NgModule({
  declarations: [
    NarracaoPage,
  ],
  imports: [
    IonicPageModule.forChild(NarracaoPage),
  ],
})
export class NarracaoPageModule {}
