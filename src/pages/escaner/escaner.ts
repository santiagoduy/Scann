import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ListaPage } from '../lista/lista';
import { CodigoProvider } from '../../providers/codigo/codigo';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-escaner',
  templateUrl: 'escaner.html'
})
export class EscanerPage {

  contador=0;
  codigosEscaneados=[];
  
  codigoescaneado="";
  tamanoLista=0;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, public codigoProvider: CodigoProvider, public storage:Storage) {
    
  }



  scan(){

    
    this.barcodeScanner.scan().then((barcodeData) => {
      this.codigoescaneado=barcodeData.text;

      //this.codigoProvider.setCode( barcodeData.text);
     // var arreglo=[11,"",2];
     
    // this.storage.set(this.contador.toString(),this.codigosEscaneados);
     this.storage.set("1",this.codigosEscaneados);
      //this.navCtrl.push(ListaPage,10000000000);
      // Success! Barcode data is here
     //codigoescaneado++;
    this.contador++;
    this.codigosEscaneados.push(barcodeData.text);
    }, (err) => {
        // An error occurred
    });
    
  }

 // mostarCodigos(){
  //this.tamanoLista=this.codigosEscaneados.length;
  //}
  
}
