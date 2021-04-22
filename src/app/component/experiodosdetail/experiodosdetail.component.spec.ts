import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiodosdetailComponent } from './experiodosdetail.component';

describe('ExperiodosdetailComponent', () => {
  let component: ExperiodosdetailComponent;
  let fixture: ComponentFixture<ExperiodosdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiodosdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiodosdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
