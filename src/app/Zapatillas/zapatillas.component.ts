import { Component, Input, OnInit } from '@angular/core';
import { ZapatillaModel } from '../models/zapatilla-model';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit {
  titulo: string;
  listadoZapatillas: ZapatillaModel[];
  marcas: string[];
  isOver: boolean;
  miMarca: string;

  constructor() {
    this.titulo = "Componente de zapatillas";
    this.isOver = false;
    this.listadoZapatillas = [
      new ZapatillaModel('nike', '40', 20, '#235e3d', true),
      new ZapatillaModel('adidas', '36', 80, '#ca3413', true),
      new ZapatillaModel('rebook', '36', 40, '#ca3413', true),
      new ZapatillaModel('puma', '40', 25, '#235e3d', false),
      new ZapatillaModel('newBalance', '42', 10, '#1f87c4', true),
      new ZapatillaModel('adidas', '42', 15, '#235e3d', true),
      new ZapatillaModel('nike', '42', 25, '#1f87c4', true),
    ];

    this.marcas = new Array();
  }

  ngOnInit(): void {
    this.getMarcas();
  }

  getMarcas() {
    this.listadoZapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca.toLowerCase()) < 0) {
        this.marcas.push(zapatilla.marca);
      }
    });

    console.log(this.marcas);
  }

  addMarca() {

    if (this.marcas.indexOf(this.miMarca.toLowerCase()) < 0) {
      alert(`Añadiste la marca ${this.miMarca}`);
      this.marcas.push(this.miMarca);
    }
  }

  eliminarMarca(index: number) {
    this.marcas.splice(index, 1);
  }

  onBlur(){
    console.log("Has salido del input");
  }

  onFocus(){
    console.log("Has ingresado al control");
  }

  mostrarPalabra(){
    alert(`La palabre es : ${this.miMarca}`);
  }
}
