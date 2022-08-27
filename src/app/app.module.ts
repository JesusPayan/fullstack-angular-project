import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';



//Import para routiar los modulos de la app

import { RouterModule,Routes } from '@angular/router';
import { FormComponent } from './clientes/form.component';
//se crea un arreglo con las rutas de los archivos 
const routes:Routes = [
    {path:'',redirectTo:'/clientes',pathMatch:'full'},
    {path:'directivas', component:DirectivaComponent},
    {path:'clientes',component:ClientesComponent},
    {path:'clientes/form', component:FormComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    
  ],
  imports: [
    BrowserModule,
   HttpClientModule,
   FormsModule,
    /*Se agrega el arreglo al modulo de routes. */
    RouterModule.forRoot(routes)
  ],
  /*En provider se agregan los servicios para la app* */
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
