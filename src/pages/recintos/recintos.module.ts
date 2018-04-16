import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecintosPage } from './recintos';

@NgModule({
  declarations: [
    RecintosPage,
  ],
  imports: [
    IonicPageModule.forChild(RecintosPage),
  ],
})
export class RecintosPageModule {}
