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
  clientes: Cliente[]=[];
  habilitar:boolean = true;
  /**Se inyecta la dependencia de Cliente service, crea un objeto tipo cliente service para posterior usarlo */
  constructor(private clienteService:ClienteService) { }

  
  ngOnInit() {
    /*Se manda llamar el metodo getClientes del servicio cliente Service. */

    /*Con .subscribe se subscribe al observador del cliente. */
    //  this.clienteService.getClientes().subscribe(
    //     this.clientes => this.clientes = this.clientes
    //  );
  
    this.clienteService.getClientes().subscribe(
      /*se subscribe el observador */
      /* Se almacena en atributo clientes, lo que se obtiene desde el clienteService
       en este caso el listado de clientes. */
     clientes => this.clientes = clientes
     /* esta tambien es una dincion anomina*/
    )


  }

  setHabilitar():void{
    /*En este caso se tiene que hacer uso de la palabra recervada this. 
    para hacer referencia a la variable habilitar. */
    this.habilitar = (this.habilitar == true) ?false:true;
  }


}
