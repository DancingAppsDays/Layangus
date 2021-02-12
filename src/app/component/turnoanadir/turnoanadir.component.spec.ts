import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoanadirComponent } from './turnoanadir.component';

describe('TurnoanadirComponent', () => {
  let component: TurnoanadirComponent;
  let fixture: ComponentFixture<TurnoanadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnoanadirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoanadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
