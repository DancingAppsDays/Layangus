import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosmeComponent } from './estudiosme.component';

describe('EstudiosmeComponent', () => {
  let component: EstudiosmeComponent;
  let fixture: ComponentFixture<EstudiosmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiosmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
