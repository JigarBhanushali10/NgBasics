import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { UserDetails } from 'src/app/features/Assesment/users/models/user.model';

@Injectable()
export class MentorFormPresenterService {
  
  public mentorForm: Subject<UserDetails>
  public mentorForm$: Observable<UserDetails>

  constructor(private fb: FormBuilder) {
    this.mentorForm = new Subject();
    this.mentorForm$ = this.mentorForm.asObservable();
   }
  
  public submitForm(mentorForm: FormGroup){

if(mentorForm.valid){
  this.mentorForm.next(mentorForm.value)
}
  }

  buildForm() {
    return this.fb.group({
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNo: ['', Validators.required],
      dateOfEmployment: [''],
      gender: [''],
      department: ['']
    })
  }
}
