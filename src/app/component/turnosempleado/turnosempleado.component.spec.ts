import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosempleadoComponent } from './turnosempleado.component';

describe('TurnosempleadoComponent', () => {
  let component: TurnosempleadoComponent;
  let fixture: ComponentFixture<TurnosempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnosempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnosempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
