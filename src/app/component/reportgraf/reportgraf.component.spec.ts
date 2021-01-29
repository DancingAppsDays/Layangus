import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportgrafComponent } from './reportgraf.component';

describe('ReportgrafComponent', () => {
  let component: ReportgrafComponent;
  let fixture: ComponentFixture<ReportgrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportgrafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportgrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
