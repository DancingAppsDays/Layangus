import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaperiodosglobalComponent } from './listaperiodosglobal.component';

describe('ListaperiodosglobalComponent', () => {
  let component: ListaperiodosglobalComponent;
  let fixture: ComponentFixture<ListaperiodosglobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaperiodosglobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaperiodosglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
