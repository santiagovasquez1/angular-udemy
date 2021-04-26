import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

/*
  Los hooks, son los eventos que se ejecutan en un momento dado del ciclo
  de vida del componente
*/
export class CursosComponent implements OnInit {

  nombre: string;
  apellido: string;
  followers: number;
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  /*
    Metodo que se ejecuta al cargar el componente
  */
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.followers = parseInt(params.followers);
      // this.nombre = params['nombre'];
      console.log(this.nombre);
    });
  }


  redirigir(){
    console.log('redirigido');
    this.router.navigate(['/zapatillas']);
  }

}
