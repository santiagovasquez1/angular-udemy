import { configuracion } from './models/configuracion';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mostrar_videjuegos: boolean;
  public config;

  constructor() {
    this.config = configuracion;
    this.mostrar_videjuegos = true;
  }

  ocultarVidejuego() {
    if (this.mostrar_videjuegos) {
      this.mostrar_videjuegos = false;
    } else {
      this.mostrar_videjuegos = true;
    }
  }
}
