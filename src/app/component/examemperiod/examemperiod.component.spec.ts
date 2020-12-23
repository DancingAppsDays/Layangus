import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamemperiodComponent } from './examemperiod.component';

describe('ExamemperiodComponent', () => {
  let component: ExamemperiodComponent;
  let fixture: ComponentFixture<ExamemperiodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamemperiodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamemperiodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
