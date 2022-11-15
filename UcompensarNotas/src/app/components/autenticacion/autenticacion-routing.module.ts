import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnoMateriaComponent } from './lista-alumno-materia/lista-alumno-materia.component';
import { ListaAlumnoComponent } from './lista-alumno/lista-alumno.component';
import { ListaMateriaComponent } from './lista-materia/lista-materia.component';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';
import { ListaProfesorMateriaComponent } from './lista-profesor-materia/lista-profesor-materia.component';
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
  },
  {
    path:'lista-profesor-materia', component: ListaProfesorMateriaComponent 
  },
  {
    path:'lista-alumno-materia', component: ListaAlumnoMateriaComponent 
  },
  {
    path:'lista-notas', component: ListaNotasComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacionRoutingModule { }
