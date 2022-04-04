import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FileDetails } from './model/file.model';

@Injectable()
export class FileUploadService {


  Link: string = environment.url
  
  constructor(private http: HttpClient) { }


    // // service to upload file
    uploadFile(file:FileDetails): Observable<FileDetails> {
      return this.http.post<FileDetails>(`${this.Link}/files`,file);
    }




     // //  servive to get file
     getFiles(): Observable<FileDetails[]> {
      return this.http.get<FileDetails[]>(`${this.Link}/files`);
    }
  
  
    // // service to get file details by id  to view
      getFilesById(id: number): Observable<FileDetails> {
      return this.http.get<FileDetails>(`${this.Link}/files/${id}`);
    }
   // // service to delete file from list
      deleteFile(id:string): Observable<FileDetails> {
      return this.http.delete<FileDetails>(`${this.Link}/files/${id}`);
    }
  
}
