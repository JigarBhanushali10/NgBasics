import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { file } from 'src/app/features/javascript/javascript.component';
import { FileDetails } from '../../model/file.model';
import { FileUploadListPresenterService } from '../file-upload-list-presenter/file-upload-list-presenter.service';

@Component({
  selector: 'app-file-upload-list-presentation',
  templateUrl: './file-upload-list-presentation.component.html',
  styleUrls: ['./file-upload-list-presentation.component.scss'],
  viewProviders: [FileUploadListPresenterService]
})
export class FileUploadListPresentationComponent implements OnInit {

  @Input() public set fileList(v: FileDetails[] | null) {
    if (v) {
      if (this._fileList == null) {
        this._fileList = v
      }
      this._fileList = v;
    }
    // console.log(this._fileList);
  }

  @Output() public delete: EventEmitter<string>;

  private _fileList: FileDetails[] | null;

  public get fileList(): any {
    return this._fileList;
  }

  constructor() {
    this.delete = new EventEmitter
  }

  ngOnInit(): void {
  }

  deleteFile(id: string) {
    this.delete.emit(id)
  }






  viewFile(url: string, type: string) {


    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const link = new Blob([blob], { type: type })
        console.log(link);
        const url = URL.createObjectURL(link)
        window.open(url, '_blank');
      })

    //   let arr = this.fileList[index].content.split(','),
    //     mime = this.fileList[index].type,
    //     bstr = atob(arr[1]),
    //     n = bstr.length,
    //     u8arr = new Uint8Array(n);

    //   while (n--) {
    //     u8arr[n] = bstr.charCodeAt(n);
    //   }

    //   window.open(` 
    // ${new File([u8arr], this.fileList[index].fileName, { type: mime })
    //     },_blank`)
  }

}
