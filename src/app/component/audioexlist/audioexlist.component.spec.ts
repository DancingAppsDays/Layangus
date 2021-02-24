import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioexlistComponent } from './audioexlist.component';

describe('AudioexlistComponent', () => {
  let component: AudioexlistComponent;
  let fixture: ComponentFixture<AudioexlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioexlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioexlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
