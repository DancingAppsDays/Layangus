import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaareasComponent } from './listaareas.component';

describe('ListaareasComponent', () => {
  let component: ListaareasComponent;
  let fixture: ComponentFixture<ListaareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
