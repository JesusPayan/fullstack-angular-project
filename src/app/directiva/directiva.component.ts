import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
  // crea un arreglo de Strings
  listaCurso: string [] = ['Java','JavaScript','Spring','Angular'];
  habilitar:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  /* este metodo, no tiene un retorno de valor simplemente hace la evaluacion necesaria 
  para validar si se tiene que mostr u ocultar una lista e Strings.
*/
  setHabilitar():void{
    /*En este caso se tiene que hacer uso de la palabra recervada this. 
    para hacer referencia a la variable habilitar. */
    this.habilitar = (this.habilitar == true) ?false:true;
  }

}
