// este es un clase para el consumo de servicios.
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
// importa el archivo clientes.json.
import { CLIENTES } from './clientes.json';
//importa el observable para el proyecto
import { Observable } from 'rxjs'; 
import { of } from 'rxjs';
import { map } from 'rxjs';



import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl:string = "http://localhost:8080/api/clientes"
  //manda las cabezeras para el metodo post
   httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  /*Metodo para retornar lo que hay en el json de cliente */
  /*El metodo retornara un observable de clientes para poder manipularlo, 
    esta basado en el patron de diseño observador. */
    constructor(private http: HttpClient) { }
  getClientes():Observable<Cliente[]>
  {
    // return of(CLIENTES);
 
   return this.http.get<Cliente[]>(this.baseUrl);
  //  return this.http.get(this.baseUrl).pipe((map funtion (response) {return response as Cliente[]} ));
  }

  //crea un nuevo Cliente
  create(cliente:Cliente):Observable<Cliente>{
    
    return this.http.post<Cliente>(this.baseUrl, cliente, {headers: this.httpHeaders});
    
  }

}
