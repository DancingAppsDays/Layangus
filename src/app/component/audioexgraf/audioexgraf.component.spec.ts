import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioexgrafComponent } from './audioexgraf.component';

describe('AudioexgrafComponent', () => {
  let component: AudioexgrafComponent;
  let fixture: ComponentFixture<AudioexgrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioexgrafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioexgrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
