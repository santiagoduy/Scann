import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CodigoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CodigoProvider {

constructor(public http: Http) {
    console.log('Hello CodigoProvider Provider');
  }
  code:string;
  setCode(code:string){
    this.code=code;
  }
  getCode():string{
    return this.code;
  }

  consumirArticulos(){
   return this.http.get('http://192.168.0.18:1337/api/articles').map(res => res.json());
   //return this.http.get('http://localhost:1337/api/articles').map(res => res.json());
  }

}
