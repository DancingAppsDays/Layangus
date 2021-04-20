import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenespirolistComponent } from './examenespirolist.component';

describe('ExamenespirolistComponent', () => {
  let component: ExamenespirolistComponent;
  let fixture: ComponentFixture<ExamenespirolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenespirolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenespirolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
