import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadService } from './file-upload.service';
import { FileUploadListContainerComponent } from './file-upload-list-container/file-upload-list-container.component';
import { FileUploadFormContainerComponent } from './file-upload-form-container/file-upload-form-container.component';
import { FileUploadFormPresentationComponent } from './file-upload-form-container/file-upload-form-presentation/file-upload-form-presentation.component';
import { FileUploadListPresentationComponent } from './file-upload-list-container/file-upload-list-presentation/file-upload-list-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadListContainerComponent,
    FileUploadFormContainerComponent,
    FileUploadFormPresentationComponent,
    FileUploadListPresentationComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    SharedModule
  ],
  providers:[FileUploadService]
})
export class FileUploadModule { }
