import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfesorMateriaComponent } from './lista-profesor-materia.component';

describe('ListaProfesorMateriaComponent', () => {
  let component: ListaProfesorMateriaComponent;
  let fixture: ComponentFixture<ListaProfesorMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProfesorMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProfesorMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
