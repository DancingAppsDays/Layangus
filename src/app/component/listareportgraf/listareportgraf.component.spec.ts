import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListareportgrafComponent } from './listareportgraf.component';

describe('ListareportgrafComponent', () => {
  let component: ListareportgrafComponent;
  let fixture: ComponentFixture<ListareportgrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListareportgrafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListareportgrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
