import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoeditComponent } from './empleadoedit.component';

describe('EmpleadoeditComponent', () => {
  let component: EmpleadoeditComponent;
  let fixture: ComponentFixture<EmpleadoeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
