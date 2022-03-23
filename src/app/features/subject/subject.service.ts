import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface User  {
  id:number;
  name: string;
  age: number;
  email: string;
};
@Injectable()

export class SubjectService {
  
  
  NewUsers: Array<User> = [
    {id:1,'name' : 'shyam', 'age' : 27, 'email':'shyam@gmail.com'},
    {id:2,'name' : 'krishna', 'age' : 25, 'email':'krishna@gmail.com'},
    {id:3,'name' : 'jigar', 'age' : 22, 'email':'jigar@gmail.com'},
  ]
  private nextId = 3;


  private _user$ = new BehaviorSubject<User[]>(this.NewUsers);
  readonly user$ = this._user$.asObservable();
  
  private _userToEdit = new Subject<User>();
  public userToEdit$ = new Observable<User>();


  constructor() {
    this.user$ = this._user$.asObservable();
    this.userToEdit$ = this._userToEdit.asObservable();
    this._user$.next(this.NewUsers);
   }


   /** Create data */
  create(item: User) {
    item.id = ++this.nextId;
    this.NewUsers.push(item);
    console.log("New Array", this.NewUsers);
    this._user$.next(this.NewUsers);
  }

  
  
  
  updateData(id: number, data: User) {
  let index = this.NewUsers.findIndex((item) => item.id == id)
  this.NewUsers[index] = data;
  this.NewUsers[index].id = id;
  this._user$.next(this.NewUsers);
}



editData(newData: User): void {
  this._userToEdit.next(newData);
}

/** Delete data */
deleteData(id: number): void {
 this.NewUsers.splice(this.NewUsers.findIndex((val) => id == val.id), 1);
}
}