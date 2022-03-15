import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable()


export class MvpUserService {

 

   Link: string = environment.url

  
  constructor(private http: HttpClient) { }


  // // service to get users office details
  //   getOffices(): Observable<Offices[]> {
  //   return this.http.get<Offices[]>(`${this.Link}/Offices`);
  // }
  // // service to get client details
  //   getClients(): Observable<ClientName[]> {
  //   return this.http.get<ClientName[]>(`${this.Link}/ClientName`);
  // }

  // // service to add user
  //   addUser(user:UserDetails): Observable<UserDetails> {
  //   return this.http.post<UserDetails>(`${this.Link}/UserDetails`,user);
  // }

  // //  servive to get users list 
  //   getUsers(): Observable<UserDetails[]> {
  //   return this.http.get<UserDetails[]>(`${this.Link}/UserDetails`);
  // }


  // // uses this for patch value in form
  // // service to get user details by id  for edit
  //   getById(id: number): Observable<UserDetails> {
  //   return this.http.get<UserDetails>(`${this.Link}/UserDetails/${id}`);
  // }
  // // service to update user .
  // editUser(id:number,user:UserDetails): Observable<UserDetails> {
  //   return this.http.put<UserDetails>(`${this.Link}/UserDetails/${id}`,user);
  // }
  
  // // service to delete user from list
  //   deleteUser(id:number): Observable<UserDetails> {
  //   return this.http.delete<UserDetails>(`${this.Link}/UserDetails/${id}`);
  // }

}
