import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorFilterPresentationComponent } from './mentor-filter-presentation.component';

describe('MentorFilterPresentationComponent', () => {
  let component: MentorFilterPresentationComponent;
  let fixture: ComponentFixture<MentorFilterPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorFilterPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorFilterPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
