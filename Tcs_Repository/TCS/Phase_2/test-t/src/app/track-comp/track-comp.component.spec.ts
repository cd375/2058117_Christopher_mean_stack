import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackCompComponent } from './track-comp.component';

describe('TrackCompComponent', () => {
  let component: TrackCompComponent;
  let fixture: ComponentFixture<TrackCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
