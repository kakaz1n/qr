import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LeitorPage } from '../pages/leitor/leitor';
import { RecintosPage } from '../pages/recintos/recintos';
import { HorariosPage } from '../pages/horarios/horarios';
import { LocalPage } from '../pages/local/local';
import { RegrasPage } from '../pages/regras/regras';
import { EventosPage } from '../pages/eventos/eventos';
import { NarracaoPage } from '../pages/narracao/narracao';
import { SobreOAppPage } from '../pages/sobre-o-app/sobre-o-app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sobre o Zoo', component: HomePage },
      //{ title: 'Leitor', component: LeitorPage },
      { title: 'Recintos', component: RecintosPage },
      { title: 'Ingressos e Horarios', component: HorariosPage },
      { title: 'Como chegar', component: LocalPage },
      { title: 'Regras do zoo', component: RegrasPage },
      { title: 'Eventos', component: EventosPage },
      { title: 'Audio Narração', component: NarracaoPage },
      { title: 'Sobre o App', component: SobreOAppPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
