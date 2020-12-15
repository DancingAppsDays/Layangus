import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamaquinasComponent } from './listamaquinas.component';

describe('ListamaquinasComponent', () => {
  let component: ListamaquinasComponent;
  let fixture: ComponentFixture<ListamaquinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListamaquinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListamaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
