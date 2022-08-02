// este es un clase para el consumo de servicios.
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
// importa el archivo clientes.json.
import { CLIENTES } from './clientes.json';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  /*Metodo para retornar lo que hay en el json de cliente */
  getClientes():Cliente[]{
    return CLIENTES;
  }
  constructor() { }
}
