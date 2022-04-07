import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FileDetails } from '../../model/file.model';

const MAX_FILE_SIZE = (1024**2)*2
@Injectable()
export class FileUploadFormPresenterService {
  
  private _files: Subject<FileDetails>
  public files$: Observable<FileDetails>
  
  constructor() {
    this._files = new Subject();
    this.files$ = this._files.asObservable();
  }
  
  // 
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
    console.log(files)
    console.log(typeof(files))
    this.getAllFileNames(fileList); // name validation
    console.log(this.fileNames)

    for (let file of files) {
      let myFile: FileDetails = <FileDetails>{}; // or {} as FileDetails (typecasting) 

      myFile.fileName = file.name;
      myFile.size = file.size;
      myFile.type = file.type;

      let fileReader = new FileReader();

      fileReader.onload = (file) => { myFile.content = file.target?.result as string;/* console.log(myFile)*/; console.log("target",file.target?.result)  }
      fileReader.readAsDataURL(file)

      if (myFile.size < MAX_FILE_SIZE) {
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
