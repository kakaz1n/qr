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

//import { ListPage } from '../pages/list/list';
//import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LeitorPage
   // ListPage,
    //BarcodeScannerPage
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
    LeitorPage
    //ListPage,
    //BarcodeScannerPage
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
