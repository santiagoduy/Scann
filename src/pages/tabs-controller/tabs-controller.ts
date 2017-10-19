import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EscanerPage } from '../escaner/escaner';
import { ListaPage } from '../lista/lista';
import { PromocionesPage } from '../promociones/promociones';
import { PerfilPage } from '../perfil/perfil';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = PerfilPage;
  tab2Root: any = EscanerPage;
  tab3Root: any = ListaPage;
  tab4Root: any = PromocionesPage;
  constructor(public navCtrl: NavController) {
  }
  goToEscaner(params){
    if (!params) params = {};
    this.navCtrl.push(EscanerPage);
  }goToLista(params){
    if (!params) params = {};
    this.navCtrl.push(ListaPage);
  }goToPromociones(params){
    if (!params) params = {};
    this.navCtrl.push(PromocionesPage);
  }goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.push(PerfilPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
