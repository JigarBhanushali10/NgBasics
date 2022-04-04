import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FileDetails } from '../../model/file.model';

@Injectable()
export class FileUploadFormPresenterService {

  private _files: Subject<FileDetails>
  public files$: Observable<FileDetails>

  constructor() {
    this._files = new Subject();
    this.files$ = this._files.asObservable();
  }

  // 
  // fileInput is an HTML input element: <input type="file" id="myfileinput" multiple>
  fileNames: string[] = [];

  getAllFileNames(fileList: any) {
    // loop through files
    for (let i = 0; i < fileList.length; i++) {

      // get item name
      this.fileNames.push(fileList[i].fileName);
    }
  }

  // 

  readfile(files: any, fileList: any) {
    console.log(fileList)
    this.getAllFileNames(fileList);
    console.log(this.fileNames)
    for (let file of files) {
      let myFile: FileDetails = {} as FileDetails;

      myFile.fileName = file.name;
      myFile.size = file.size;
      myFile.type = file.type;

      let fileReader = new FileReader();

      fileReader.readAsDataURL(file)
      fileReader.onload = (e) => { myFile.content = e.target?.result as string; console.log(myFile) }

      if (myFile.size / (1024 ** 2) < (2)) {
        if (this.fileNames.includes(myFile.fileName)) {

          alert("Cannot Upload Same File")
        } else {
          this.fileNames.push(myFile.fileName)
          this._files.next(myFile)
        }
      }
      else {
        alert("File size must be less than 2 MB ")
      }
    }
  }
}
