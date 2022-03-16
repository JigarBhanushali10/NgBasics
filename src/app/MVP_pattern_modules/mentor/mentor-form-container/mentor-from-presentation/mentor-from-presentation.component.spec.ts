import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorFromPresentationComponent } from './mentor-from-presentation.component';

describe('MentorFromPresentationComponent', () => {
  let component: MentorFromPresentationComponent;
  let fixture: ComponentFixture<MentorFromPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorFromPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorFromPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
