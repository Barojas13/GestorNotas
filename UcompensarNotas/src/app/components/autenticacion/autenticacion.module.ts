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


@NgModule({
  declarations: [
    LoginComponent,
    MenuComponent,
    CrearProfesorComponent,
    ListaAlumnoComponent,
    CrearAlumnoComponent,
    ListaMateriaComponent,
    CrearMateriaComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    NgbModule
  ]
})
export class AutenticacionModule { }
