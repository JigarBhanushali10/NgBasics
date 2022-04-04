import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    console.log(this._fileList);
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

  editFile(content: string){
    
  }

}
