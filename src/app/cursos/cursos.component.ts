import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  /*
    Metodo que se ejecuta al cargar el componente
  */
  ngOnInit(): void {
  }

}
