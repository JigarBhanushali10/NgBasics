import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MentorFilterPresenterService {

  public filterForm: Subject<any>
  public filterForm$: Observable<any>

  constructor(private fb: FormBuilder) {
    
    this.filterForm = new Subject();
    this.filterForm$ = this.filterForm.asObservable();
   }
   
   public submitForm(filterForm: FormGroup){

   
      this.filterForm.next(filterForm.value)
    
      }

  buildForm() {
    return this.fb.group({
      name: [''],
      gender: [''],
      department: [''],
    
    })
  }
}
