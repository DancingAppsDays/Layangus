import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenrayosxComponent } from './examenrayosx.component';

describe('ExamenrayosxComponent', () => {
  let component: ExamenrayosxComponent;
  let fixture: ComponentFixture<ExamenrayosxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenrayosxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenrayosxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
