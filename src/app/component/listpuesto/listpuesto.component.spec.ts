import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpuestoComponent } from './listpuesto.component';

describe('ListpuestoComponent', () => {
  let component: ListpuestoComponent;
  let fixture: ComponentFixture<ListpuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpuestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
