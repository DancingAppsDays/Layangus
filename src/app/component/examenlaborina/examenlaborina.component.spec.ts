import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenlaborinaComponent } from './examenlaborina.component';

describe('ExamenlaborinaComponent', () => {
  let component: ExamenlaborinaComponent;
  let fixture: ComponentFixture<ExamenlaborinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenlaborinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenlaborinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
