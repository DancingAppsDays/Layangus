import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaplantasComponent } from './listaplantas.component';

describe('ListaplantasComponent', () => {
  let component: ListaplantasComponent;
  let fixture: ComponentFixture<ListaplantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaplantasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaplantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
