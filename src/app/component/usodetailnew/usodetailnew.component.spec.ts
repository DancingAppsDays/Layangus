import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsodetailnewComponent } from './usodetailnew.component';

describe('UsodetailnewComponent', () => {
  let component: UsodetailnewComponent;
  let fixture: ComponentFixture<UsodetailnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsodetailnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsodetailnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
