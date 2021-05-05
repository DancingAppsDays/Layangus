import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenlabsangrelistComponent } from './examenlabsangrelist.component';

describe('ExamenlabsangrelistComponent', () => {
  let component: ExamenlabsangrelistComponent;
  let fixture: ComponentFixture<ExamenlabsangrelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenlabsangrelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenlabsangrelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
