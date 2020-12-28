import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenperiodlistComponent } from './examenperiodlist.component';

describe('ExamenperiodlistComponent', () => {
  let component: ExamenperiodlistComponent;
  let fixture: ComponentFixture<ExamenperiodlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenperiodlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenperiodlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
