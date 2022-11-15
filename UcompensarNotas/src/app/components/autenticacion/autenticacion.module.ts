import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrearProfesorComponent } from './crear-profesor/crear-profesor.component';
import { ListaAlumnoComponent } from './lista-alumno/lista-alumno.component';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { ListaMateriaComponent } from './lista-materia/lista-materia.component';
import { CrearMateriaComponent } from './crear-materia/crear-materia.component';
import { ListaProfesorMateriaComponent } from './lista-profesor-materia/lista-profesor-materia.component';
import { ListaAlumnoMateriaComponent } from './lista-alumno-materia/lista-alumno-materia.component';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';


@NgModule({
  declarations: [
    LoginComponent,
    MenuComponent,
    CrearProfesorComponent,
    ListaAlumnoComponent,
    CrearAlumnoComponent,
    ListaMateriaComponent,
    CrearMateriaComponent,
    ListaProfesorMateriaComponent,
    ListaAlumnoMateriaComponent,
    ListaNotasComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    NgbModule
  ]
})
export class AutenticacionModule { }
