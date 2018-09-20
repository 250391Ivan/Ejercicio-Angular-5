import {Injectable,Component,NgModule} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import { HttpModule } from '@angular/http';

@Component({
  
  providers:[Http]
})

@NgModule({
    imports: [ HttpModule ],
    
})

@Injectable()

//  creo mis  peticiones  en  base  a las  dos  urls  y  obtengo  por  get  la  infoamacion para trabajar  con  la  informacion del  json
export class PeticionesService{
     
     public url:any;
     public detalles_moneda:any;

     constructor(
         private _http:Http
     	){
     	this.url ="https://api.coinmarketcap.com/v2/listings/";
        this.detalles_moneda ="https://api.coinmarketcap.com/v2/ticker/";
     }

	

	getDatos(){
		return this._http.get(this.url)
		.map(res =>res.json());
	}

    getDetalles(){
        return this._http.get(this.detalles_moneda)
        .map(res =>res.json());
    }

  


    
}
