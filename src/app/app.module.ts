import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VideoJuegoComponent } from './VideoJuego/videoJuego.component';
import { ZapatillasComponent } from "./Zapatillas/zapatillas.component";
import { CursosComponent } from './cursos/cursos.component';

@NgModule({

  //Directivas y componentes de nuestra app
  declarations: [
    AppComponent,
    VideoJuegoComponent,
    ZapatillasComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //Componente principal de la aplicacion, simil a clase main
  bootstrap: [AppComponent]
})
export class AppModule { }
