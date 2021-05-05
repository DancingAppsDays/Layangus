import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenlabsangreComponent } from './examenlabsangre.component';

describe('ExamenlabsangreComponent', () => {
  let component: ExamenlabsangreComponent;
  let fixture: ComponentFixture<ExamenlabsangreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenlabsangreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenlabsangreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
