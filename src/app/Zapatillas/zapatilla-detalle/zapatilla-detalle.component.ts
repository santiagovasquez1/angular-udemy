import { Component, Input, OnInit } from '@angular/core';
import { ZapatillaModel } from 'src/app/models/zapatilla-model';

@Component({
  selector: 'zapatilla-detalle',
  templateUrl: './zapatilla-detalle.component.html',
  styleUrls: ['./zapatilla-detalle.component.css']
})
export class ZapatillaDetalleComponent implements OnInit {

  @Input() zapatilla: ZapatillaModel
  isVisible: boolean
  color: string;

  constructor() {

    this.isVisible = false;
  }

  ngOnInit(): void {
    this.color=this.zapatilla.color;
  }

  showButton(show: boolean) {
    this.isVisible = show;
  }

  cambiarColor(color:string){
    this.color=color;
  }
}
