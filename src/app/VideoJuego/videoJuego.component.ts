import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videoJuego.component.html'
})
export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy {
  //propiedades
  public titulo: string;
  public tituloListado: string;
  public listado: string[];

  constructor() {
    this.titulo = "Componente de video juegos desde typescript";
    this.tituloListado = "Listado de los juegos mas populares"
    this.listado = ['The Witcher 2', 'Assasins Creed', 'PacMan']
    console.log("Se ha cargado el componente");
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("OnInit ejecutado");
  }

  ngDoCheck(): void {
    /*
      Metodo que se ejecuta, cada vez que ocurra un cambio en nuestro componente
    */
    console.log("Do Check ejecutado");
  }

  ngOnDestroy(): void {
    /*
    Metodo que se ejecuta antes de eliminar la instancia del componente
    */
    console.log('On destroy ejecutado');
  }

  cambiarTitulo() {
    let newTitle = (<HTMLInputElement>document.getElementById('newTitle')).value;
    this.titulo = newTitle;
  }
}
