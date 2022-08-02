import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  /*Declara un arreglo de tipo cliente */
  clientes: Cliente[] = [];
  habilitar:boolean = true;
  /**Se inyecta la dependencia de Cliente service */
  constructor(private clienteService:ClienteService) { }

  
  ngOnInit(): void {
    /*Se manda llamar el metodo getClientes del servicio cliente Service. */
    this.clientes = this.clienteService.getClientes();
  
  }

  setHabilitar():void{
    /*En este caso se tiene que hacer uso de la palabra recervada this. 
    para hacer referencia a la variable habilitar. */
    this.habilitar = (this.habilitar == true) ?false:true;
  }


}
