import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFromPresentationComponent } from './user-from-presentation.component';

describe('UserFromPresentationComponent', () => {
  let component: UserFromPresentationComponent;
  let fixture: ComponentFixture<UserFromPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFromPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFromPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
