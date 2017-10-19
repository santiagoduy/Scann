import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EscanerPage } from '../escaner/escaner';
import { CodigoProvider} from '../../providers/codigo/codigo';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {

  txt;
  txt2=[];
 

  tamano = 100;
 

  productos=[{codigo:1,nombre:'a',precio:'$1',cantidad:0},{codigo:2,nombre:'b',precio:'$2',cantidad:0},{codigo:3,nombre:'c',precio:'$3',cantidad:0}  ];
  productos1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public codigoProvider: CodigoProvider,  public storage:Storage) {

    
       //this.txt2=this.CodigoProvider.name;
       // this.txt2=this.navParams.get("name");
        //this.txt20=this.navParams.get();
  }
  
  add(codigo){
    for(var i=0;i<this.productos.length;i++){
        if(this.productos[i].codigo == codigo){
          this.productos[i].cantidad=this.productos[i].cantidad+1
        }
    }
  }

  rest(codigo){
    for(var i=0;i<this.productos.length;i++){
      if(this.productos[i].codigo == codigo){
        this.productos[i].cantidad=this.productos[i].cantidad-1
      }
  }
  }



  consumir(){
    this.codigoProvider.consumirArticulos().subscribe(data => {
      this.productos1= data;
  });
  }

  hello(){
   // this.txt2=this.CodigoProvider.getCode();
   this.storage.get("1").then(
        (hola)=>{
          
          this.txt2=hola;
        }

    );
    
  }

}
