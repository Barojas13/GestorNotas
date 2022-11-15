import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlumnoMateriaComponent } from './lista-alumno-materia.component';

describe('ListaAlumnoMateriaComponent', () => {
  let component: ListaAlumnoMateriaComponent;
  let fixture: ComponentFixture<ListaAlumnoMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAlumnoMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlumnoMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
