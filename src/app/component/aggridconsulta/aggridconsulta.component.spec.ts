import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridconsultaComponent } from './aggridconsulta.component';

describe('AggridconsultaComponent', () => {
  let component: AggridconsultaComponent;
  let fixture: ComponentFixture<AggridconsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridconsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggridconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
