import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  identificado: boolean
  constructor() {
    this.identificado = false;
  }

  ngOnInit(): void {
  }

  setIdentificar() {
    this.identificado = true;
  }
  unSetIdentificar() {
    this.identificado = false;
  }
}
