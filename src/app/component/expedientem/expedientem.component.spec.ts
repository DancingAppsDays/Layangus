import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedientemComponent } from './expedientem.component';

describe('ExpedientemComponent', () => {
  let component: ExpedientemComponent;
  let fixture: ComponentFixture<ExpedientemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpedientemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedientemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
