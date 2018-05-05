import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { SplashScreen } from '@ionic-native/splash-screen';
//import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
//import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
//import {HttpModule, Http } from '@angular/http';
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
//import { colors } from '../theme/variables.scss';

//@import "ionic.globals";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import { LoginPage } from '../pages/login/login';
import { ComponentsModule } from '../components/components.module';

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCeX4zf0gf7y5Hi6BtlN77gMVA7-2xPO1w",
    authDomain: "zoologico-d116b.firebaseapp.com",
    databaseURL: "https://zoologico-d116b.firebaseio.com",
    projectId: "zoologico-d116b",
    storageBucket: "zoologico-d116b.appspot.com",
    messagingSenderId: "498368104232"
  };

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
    ConfigPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   // HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ComponentsModule
    //colors
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LeitorPage,
    HorariosPage,
    RecintosPage,
    LocalPage,
    LoginPage,
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
    TextToSpeech,
    GooglePlus
  ]
})
export class AppModule {}
