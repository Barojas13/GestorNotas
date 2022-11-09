import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnoComponent } from './lista-alumno/lista-alumno.component';
import { ListaMateriaComponent } from './lista-materia/lista-materia.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:'login', component: LoginComponent,
  },
  {
    path:'menu', component: MenuComponent
  },
  {
    path:'lista-alumno', component: ListaAlumnoComponent 
  },
  {
    path:'lista-materia', component: ListaMateriaComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacionRoutingModule { }
