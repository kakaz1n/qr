import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { SplashScreen } from '@ionic-native/splash-screen';
//import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
//import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import {HttpModule, Http } from '@angular/http';
import {NgxQRCodeModule } from 'ngx-qrcode2';
import { TextToSpeech } from '@ionic-native/text-to-speech';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LeitorPage } from '../pages/leitor/leitor';
import { RecintosPage } from '../pages/recintos/recintos';
import { HorariosPage } from '../pages/horarios/horarios';
import { LocalPage } from '../pages/local/local';
import { RegrasPage } from '../pages/regras/regras';
import { EventosPage } from '../pages/eventos/eventos';
import { NarracaoPage } from '../pages/narracao/narracao';
import { SobreOAppPage } from '../pages/sobre-o-app/sobre-o-app';
import { ConfigPage } from '../pages/config/config';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LeitorPage,
    RecintosPage,
    HorariosPage,
    LocalPage,
    RegrasPage,
    EventosPage,
    NarracaoPage,
    SobreOAppPage,
    ConfigPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LeitorPage,
    HorariosPage,
    RecintosPage,
    LocalPage,
    RegrasPage,
    EventosPage,
    NarracaoPage,
    SobreOAppPage,
    ConfigPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    Toast,
    TextToSpeech
  ]
})
export class AppModule {}
