import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenrayosxlistComponent } from './examenrayosxlist.component';

describe('ExamenrayosxlistComponent', () => {
  let component: ExamenrayosxlistComponent;
  let fixture: ComponentFixture<ExamenrayosxlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenrayosxlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenrayosxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
