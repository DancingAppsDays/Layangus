import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaincidentesComponent } from './listaincidentes.component';

describe('ListaincidentesComponent', () => {
  let component: ListaincidentesComponent;
  let fixture: ComponentFixture<ListaincidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaincidentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaincidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
