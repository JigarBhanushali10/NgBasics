import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from '../file-upload.service';
import { FileDetails } from '../model/file.model';

@Component({
  selector: 'app-file-upload-form-container',
  templateUrl: './file-upload-form-container.component.html',
  styleUrls: ['./file-upload-form-container.component.scss']
})
export class FileUploadFormContainerComponent implements OnInit {

  
  public fileList$: Observable<FileDetails[]> 
  
  constructor(private service: FileUploadService) { }

  ngOnInit(): void {
    this.getFiles()
  }
  
  addFiles(files: any) {
    this.service.uploadFile(files).subscribe(res =>
      console.log("going for post", res))
  }


  getFiles() {
    this.fileList$ = this.service.getFiles();
    

  }
  
}
