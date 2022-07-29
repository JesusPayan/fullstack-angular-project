import { LeadingComment } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // en esta parte se pueden agregar las variables que se utilizan.
  title:string = 'Este es un Curso de Ejemplo de FullStack';
  curso: string = 'Spring 5 con Angular 7';
  profesor: string = 'FullStack Developer Jesus A. Hdez Payan';
}
