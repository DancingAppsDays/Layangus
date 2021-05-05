import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenlaborinalistComponent } from './examenlaborinalist.component';

describe('ExamenlaborinalistComponent', () => {
  let component: ExamenlaborinalistComponent;
  let fixture: ComponentFixture<ExamenlaborinalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenlaborinalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenlaborinalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
