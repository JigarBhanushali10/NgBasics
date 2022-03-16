import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class MentorListPresenterService {
  
  private _delete: Subject<number>;
  public delete$: Observable<number>;
    
  constructor() {
    this._delete = new Subject();

    this.delete$ = this._delete.asObservable();
   }
   
   
   public delete(id: number) {
    this._delete.next(id);
  }
}