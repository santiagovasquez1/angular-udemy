import { ZapatillaServiceService } from './../services/zapatilla-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { ZapatillaModel } from '../models/zapatilla-model';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaServiceService]
})
export class ZapatillasComponent implements OnInit {
  titulo: string;
  listadoZapatillas: ZapatillaModel[];
  marcas: string[];
  isOver: boolean;
  miMarca: string;

  constructor(private ZapatillaService: ZapatillaServiceService) {
    this.titulo = "Componente de zapatillas";
    this.isOver = false;
    this.marcas = new Array();
  }

  ngOnInit(): void {
    this.listadoZapatillas = this.ZapatillaService.getZapatillas();
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

  onBlur() {
    console.log("Has salido del input");
  }

  onFocus() {
    console.log("Has ingresado al control");
  }

  mostrarPalabra() {
    alert(`La palabre es : ${this.miMarca}`);
  }
}
