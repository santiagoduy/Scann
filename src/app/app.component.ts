import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { EscanerPage } from '../pages/escaner/escaner';
import { ListaPage } from '../pages/lista/lista';
import { PromocionesPage } from '../pages/promociones/promociones';


import { PerfilPage } from '../pages/perfil/perfil';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = PerfilPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignupPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToEscaner(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EscanerPage);
  }goToLista(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ListaPage);
  }goToPromociones(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PromocionesPage);
  }
}
