import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserDetails } from 'src/app/features/Assesment/users/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable()


export class MvpMentorService {

 

   Link: string = environment.url

  
  constructor(private http: HttpClient) { }


 

  // // service to add user
    addMentor(user:UserDetails): Observable<UserDetails> {
    return this.http.post<UserDetails>(`${this.Link}/UserDetails`,user);
  }

  // //  servive to get users list 
    getMentors(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(`${this.Link}/UserDetails`);
  }


  // // uses this for patch value in form
  // // service to get user details by id  for edit
    getById(id: number): Observable<UserDetails> {
    return this.http.get<UserDetails>(`${this.Link}/UserDetails/${id}`);
  }
  // // service to update user .
  editMentor(id:number,user:UserDetails): Observable<UserDetails> {
    return this.http.put<UserDetails>(`${this.Link}/UserDetails/${id}`,user);
  }
  
  // // service to delete user from list
    deleteMentor(id:number): Observable<UserDetails> {
    return this.http.delete<UserDetails>(`${this.Link}/UserDetails/${id}`);
  }

}
