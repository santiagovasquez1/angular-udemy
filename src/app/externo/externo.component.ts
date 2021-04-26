import { PeticionesService } from './../services/peticiones.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css']
})
export class ExternoComponent implements OnInit {

  posts: any;
  titleId: string;
  fecha: Date;

  constructor(private peticionesServices: PeticionesService) {
    this.titleId = '1';
  }

  ngOnInit(): void {
    this.reloj();
    this.cargaUsuario();
  }

  cargaUsuario(): void {
    this.posts = false;

    this.peticionesServices.getUser(this.titleId).subscribe(result => {
      console.log(result);
      this.posts = result;
    }, error => {
      console.log(error);
    });
  }

  reloj(): void {

    setInterval(() => {
      this.fecha = new Date();
    }, 1000);
  }


}
