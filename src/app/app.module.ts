import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { PerfilPage } from '../pages/perfil/perfil';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { EscanerPage } from '../pages/escaner/escaner';
import { ListaPage } from '../pages/lista/lista';
import { PromocionesPage } from '../pages/promociones/promociones';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { IonicStorageModule } from '@ionic/storage';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { CodigoProvider } from '../providers/codigo/codigo';

@NgModule({
  declarations: [
    MyApp,
    TabsControllerPage,
    PerfilPage,
    LoginPage,
    SignupPage,
    EscanerPage,
    ListaPage,
    PromocionesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsControllerPage,
    PerfilPage,
    LoginPage,
    SignupPage,
    EscanerPage,
    ListaPage,
    PromocionesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    CodigoProvider
  ]
})
export class AppModule {}