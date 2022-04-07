import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'
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
    console.log("for name valiadation", this._fileList);
  }
  private _fileList: FileDetails[] | null;

  public get fileList(): any {
    return this._fileList;
  }

  fileData: FileDetails[]// to store file data to use array methods

  @Output() add: EventEmitter<FileDetails>;

  service = new FileUploadFormPresenterService()// we can use service by making instace of it also (just a demo .remove afterwards) but this creates another instace 

  constructor( private router: Router) {
    this.add = new EventEmitter();
    this.fileData = [];
  }

  // fileToUpload: any[] = [];

  ngOnInit(): void {
    
    this.service.files$.subscribe((res) => {
      console.log("from presenter", res);
      this.fileData.push(res);// storing file data in file array
    })
  }

  fileToUpload: any = [];

  newFile: FileDetails[] = []

  readFile(event: any) {
    
    const allFile = event.files;
    this.service.readfile(allFile, this._fileList);
    console.log(allFile);
    this.fileToUpload = Object.keys(allFile).map((key: any) => allFile[key]);
    console.log("viral", this.fileToUpload);
    // for (let file of this.fileData) {
    //   let fileToUpload: FileDetails = {} as FileDetails

    //   fileToUpload.fileName = file.fileName
    //   fileToUpload.size = file.size
    //   fileToUpload.type = file.type
    //   if (this.fileToUpload.find(f => f.fileName == fileToUpload.fileName)) { //
    //     // alert("Cannot add same fil121111")
    //     console.log("Cannot add same file");

    //   }
    //   else {
    //     this.fileToUpload.push(fileToUpload)
    //     console.log("file final",
    //       this.fileToUpload
    //     );
    //   }
    // }


  }

  uploadFile() {
    this.fileData.forEach(file => {  // loop on file[] to emit event 

      this.add.emit(file)
      // this.router.navigate(["/file-upload/list"])
      this.router.navigateByUrl("/file-upload/list")

    });
  }
}
