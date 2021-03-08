import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaadvComponent } from './consultaadv.component';

describe('ConsultaadvComponent', () => {
  let component: ConsultaadvComponent;
  let fixture: ComponentFixture<ConsultaadvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaadvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaadvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
