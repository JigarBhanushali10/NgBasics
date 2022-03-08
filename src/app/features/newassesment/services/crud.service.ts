import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  NewUsers: Array<any> = [
    {'name' : 'shyam', 'Age' : 27, id:0},
    {'name' : 'krishna', 'Age' : 25, id:1},
    {'name' : 'jigar', 'Age' : 22, id:2},
  ]
  constructor() { }
}
