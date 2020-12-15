import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportaccidenteComponent } from './reportaccidente.component';

describe('ReportaccidenteComponent', () => {
  let component: ReportaccidenteComponent;
  let fixture: ComponentFixture<ReportaccidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportaccidenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportaccidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
