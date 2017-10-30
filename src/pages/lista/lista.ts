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
    for(var i=0;i<this.productos1.length;i++){
        if(this.productos1[i].codigo == codigo){
          this.productos1[i].cantidad=this.productos1[i].cantidad+1
        }
    }
  }

  rest(codigo){
    for(var i=0;i<this.productos1.length;i++){
      if(this.productos1[i].codigo == codigo){
        this.productos1[i].cantidad=this.productos1[i].cantidad-1
      }
  }
  }



  consumir(){
    this.codigoProvider.consumirArticulos().subscribe(data => {
     // var productoRecibido=new Object();
     // productoRecibido = {nombre:"san",ape:"duj"};
      //this.productos1=productoRecibdo.author;
      this.productos1= data;
    //  console.log(productoRecibido.nombre);
      //console.log(productoRecibido[0]);

      var jsontext = '{"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"]}';
      //var jsontext = data;
      var contact = JSON.parse(jsontext);
      //console.log(JSON.stringify(data));
      var data2=JSON.stringify(data)
      var dataJSON=JSON.parse(data2);
      console.log(data2);
      console.log(dataJSON[0].author);
      //console.log(data);
      console.log(Array.isArray(this.productos1));
      //this.productos1[0].cant=1;
      this.productos1[0].cantidad=1;
      this.productos1[1].cantidad=1;
      console.log(this.productos1);
      //this.productos1[0].prototype=function(){cantidad=1};
     console.log("hola");
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
