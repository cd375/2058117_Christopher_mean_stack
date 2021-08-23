import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoTrackComponent } from './to-do-track.component';

describe('ToDoTrackComponent', () => {
  let component: ToDoTrackComponent;
  let fixture: ComponentFixture<ToDoTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
