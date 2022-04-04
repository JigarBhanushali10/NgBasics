import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from '../file-upload.service';
import { FileDetails } from '../model/file.model';

@Component({
  selector: 'app-file-upload-list-container',
  templateUrl: './file-upload-list-container.component.html',
  styleUrls: ['./file-upload-list-container.component.scss']
})
export class FileUploadListContainerComponent implements OnInit {

  public fileList$: Observable<FileDetails[]>

  constructor(private service: FileUploadService) {

    this.fileList$ = new Observable();
  }

  ngOnInit(): void {
    this.getFiles()
  }

  getFiles() {
    this.fileList$ = this.service.getFiles();

  }

  deleteFile(id: string){
    this.service.deleteFile(id).subscribe(() =>
      alert("File Deleted")
    )
    this.getFiles()
  }
}
