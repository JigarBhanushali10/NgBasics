import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadFormPresentationComponent } from './file-upload-form-presentation.component';

describe('FileUploadFormPresentationComponent', () => {
  let component: FileUploadFormPresentationComponent;
  let fixture: ComponentFixture<FileUploadFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
