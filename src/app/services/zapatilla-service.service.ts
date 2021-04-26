import { ZapatillaModel } from '../models/zapatilla-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZapatillaServiceService {
  private listadoZapatillas: ZapatillaModel[];

  constructor() {
    this.listadoZapatillas = [
      new ZapatillaModel('nike', '40', 20, '#235e3d', true),
      new ZapatillaModel('adidas', '36', 80, '#ca3413', true),
      new ZapatillaModel('rebook', '36', 40, '#ca3413', true),
      new ZapatillaModel('puma', '40', 25, '#235e3d', false),
      new ZapatillaModel('newBalance', '42', 10, '#1f87c4', true),
      new ZapatillaModel('adidas', '42', 15, '#235e3d', true),
      new ZapatillaModel('nike', '42', 25, '#1f87c4', true),
    ];

  }

  getTexto(){
    return 'Hola mundo desde un servicio';
  }

  getZapatillas(): ZapatillaModel[] {
    return this.listadoZapatillas;
  }
}
