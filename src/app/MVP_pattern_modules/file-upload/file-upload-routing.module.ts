import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadFormContainerComponent } from './file-upload-form-container/file-upload-form-container.component';
import { FileUploadListContainerComponent } from './file-upload-list-container/file-upload-list-container.component';
import { FileUploadComponent } from './file-upload.component';

const routes: Routes = [
  {
    path: '', component: FileUploadComponent
    ,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list', component: FileUploadListContainerComponent
      },
      {
        path: 'add', component: FileUploadFormContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadRoutingModule { }
