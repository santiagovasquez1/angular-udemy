import { MensajeUsuario } from '../models/MensajeUsuario';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  usuario: MensajeUsuario;
  constructor() {
    this.usuario = new MensajeUsuario('', '', '', '');
  }

  ngOnInit(): void {

  }

  onSubmit(formContacto){
    console.log(this.usuario);
    formContacto.reset();
  }

}
