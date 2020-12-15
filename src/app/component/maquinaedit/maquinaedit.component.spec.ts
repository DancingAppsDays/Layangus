import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaeditComponent } from './maquinaedit.component';

describe('MaquinaeditComponent', () => {
  let component: MaquinaeditComponent;
  let fixture: ComponentFixture<MaquinaeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquinaeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
