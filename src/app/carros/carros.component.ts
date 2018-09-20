//Este componente  se  encarga  de  realizr  mis  funciones  que  voy  a  utilizar  el  las  vistas  y  las  tuberias.
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

//se  importa el nombre del servicio
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css'],
  providers:[PeticionesService]
})


export class CarrosComponent implements OnInit {
	// se  declaran  las  variables  a utilizar 
    public nombre:any;
    public color:any; 
    public resultado:Array<any>;
    public id_new:any;
    public det_monedas:Array<any>;
    public bandera:any;
    public fecha:any;
    public bandera_lista:any;



    constructor(
    	private _peticionesService:PeticionesService
    	) {
            
     }

   
    
//al  cargar  la  pagina  me  trae  el  primer  json  y  lo  almaceno  en  una  variable  tipo array para  poder  manipularlo
  ngOnInit() {
  	
  	this._peticionesService.getDatos().subscribe(
        result =>{
        	console.log(result['data']);
        	this.resultado=result['data'];

        },
        error =>{
        	var err =' ALGO  SALIO MAL';
        	console.log(err);
        }
  		);

     

  }

//Cuando  selecciono  un  tipo de  moneda  le  paso  el id  para  obtener  los  detalles del segundo  metodo  del  json
//Encontre  que  para  los  id pares  no  siempre se  tienen detalles
//Quise  agregar  una  validacion para  cuando  no  se  tuviera  info  se  enviara  un json comentando esta  detalle
//por  falta  de tiempo ya  no  lo pude  implementar

  id_moneda(id) {
   console.log('-- click moneda---');
   console.log(id);
   this.bandera=true;
   this.bandera_lista=true;
   this.fecha = Date.now();
    console.log(this.fecha);
   this._peticionesService.getDetalles().subscribe(
        result =>{
          console.log(result['data'][id]);
          this.det_monedas=result['data'][id];

        },
        error =>{
          var err =' error  en los  datos';
          console.log(err);
        }

      );
 
    
   ;
  }



      return(){
       this.bandera_lista=false;
       
    }

}
