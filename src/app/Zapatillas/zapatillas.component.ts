import { Component } from '@angular/core';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent {
  titulo: string;
  listadoZapatillas:string[];

  constructor() {
    this.titulo="Componente de zapatillas";
    this.listadoZapatillas=['Adidad','Nike','Bossi','Puma','New Balance'];
  }
}
