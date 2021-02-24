import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioexComponent } from './audioex.component';

describe('AudioexComponent', () => {
  let component: AudioexComponent;
  let fixture: ComponentFixture<AudioexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
