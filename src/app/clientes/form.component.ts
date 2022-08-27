import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, Routes } from '@angular/router';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title:string = "Formulario Clientes";

  public cliente:Cliente = new Cliente()
  // inyecta la dependencia del Servicio Cliente
  constructor(private clientService:ClienteService, private router:Router ) { 

  }

  ngOnInit(): void {
  }

  public create():void{
    this.clientService.create(this.cliente).subscribe(
      cliente =>{
        this.router.navigate(['/clientes'])
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })

        } 
      )

  }
}
