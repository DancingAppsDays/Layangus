import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenespiroComponent } from './examenespiro.component';

describe('ExamenespiroComponent', () => {
  let component: ExamenespiroComponent;
  let fixture: ComponentFixture<ExamenespiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenespiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenespiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
