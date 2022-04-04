import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileDetails } from '../../model/file.model';
import { FileUploadFormPresenterService } from '../file-upload-form-presenter/file-upload-form-presenter.service';






@Component({
  selector: 'app-file-upload-form-presentation',
  templateUrl: './file-upload-form-presentation.component.html',
  styleUrls: ['./file-upload-form-presentation.component.scss'],
  viewProviders: [FileUploadFormPresenterService]
})
export class FileUploadFormPresentationComponent implements OnInit {

  @Input() public set fileList(value: FileDetails[] | null) {
    if (value) {
      if (this._fileList == null) {
        this._fileList = value
      }
      this._fileList = value;
    }
    console.log("for name valiadation",this._fileList);
  }
private _fileList: FileDetails[] | null;

  public get fileList(): any {
    return this._fileList;
  }

fileData : FileDetails[]

  @Output() add: EventEmitter<FileDetails>;
  

  constructor(private service: FileUploadFormPresenterService) {
    this.add = new EventEmitter();
    this.fileData = [];
   }

  ngOnInit(): void {
    this.service.files$.subscribe((res) => {
      console.log("from presenter",res);
      this.fileData.push(res);
    })
  }

  readFile(event: any) {
    this.service.readfile(event.files, this._fileList);
    console.log(event.files)
  }

  uploadFile() {
    this.fileData.forEach(file => {
      this.add.emit(file)
    });
  }
}
