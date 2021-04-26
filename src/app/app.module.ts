import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VideoJuegoComponent } from './VideoJuego/videoJuego.component';
import { ZapatillasComponent } from "./Zapatillas/zapatillas.component";
import { CursosComponent } from './cursos/cursos.component';
import { ZapatillaDetalleComponent } from './Zapatillas/zapatilla-detalle/zapatilla-detalle.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';

@NgModule({

  //Directivas y componentes de nuestra app
  declarations: [
    AppComponent,
    VideoJuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    ZapatillaDetalleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  //Componente principal de la aplicacion, simil a clase main
  bootstrap: [AppComponent]
})
export class AppModule { }
