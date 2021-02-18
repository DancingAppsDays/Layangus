import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestoeditComponent } from './puestoedit.component';

describe('PuestoeditComponent', () => {
  let component: PuestoeditComponent;
  let fixture: ComponentFixture<PuestoeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuestoeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuestoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
