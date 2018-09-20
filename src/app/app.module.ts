import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// se  agregan  los pipes del mismo componente  

import { FormsModule } from '@angular/forms';
//para poder  usar los http se debe agregar 
import { HttpModule } from '@angular/http';
import { CarrosComponent } from './carros/carros.component';




@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule  

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
