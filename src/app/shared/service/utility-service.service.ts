import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {
  baseUrl: string = environment.url;


  constructor(private http: HttpClient) {

  }

  login(): Observable<any> {
   return this.http.get<any[]>(`${this.baseUrl}/admin`)
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/admin`, data);
  }
}
