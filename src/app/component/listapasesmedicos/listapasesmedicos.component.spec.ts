import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapasesmedicosComponent } from './listapasesmedicos.component';

describe('ListapasesmedicosComponent', () => {
  let component: ListapasesmedicosComponent;
  let fixture: ComponentFixture<ListapasesmedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListapasesmedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapasesmedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
