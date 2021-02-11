import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameneslastsComponent } from './exameneslasts.component';

describe('ExameneslastsComponent', () => {
  let component: ExameneslastsComponent;
  let fixture: ComponentFixture<ExameneslastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExameneslastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameneslastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
