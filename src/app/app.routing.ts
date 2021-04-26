import { CreateUserComponent } from './create-user/create-user.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ExternoComponent } from './externo/externo.component';
import { CursosComponent } from './cursos/cursos.component';
//Importar modulos del router de angular
import { Routes, RouterModule } from '@angular/router'

//Importar componentes
import { ZapatillasComponent } from './Zapatillas/zapatillas.component';
import { VideoJuegoComponent } from './VideoJuego/videoJuego.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'videojuego', component: VideoJuegoComponent },
  { path: 'zapatillas', component: ZapatillasComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:nombre/:followers', component: CursosComponent },
  { path: 'cursos/:nombre/:apellidos', component: CursosComponent },
  { path: 'externo', component: ExternoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'crear usuario', component: CreateUserComponent },
  { path: '**', component: HomeComponent } //Ruta 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
