import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-user-form-input',
  templateUrl: './user-form-input.component.html',
})


export class UserFormInputComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,private service: CrudService) { }
  get getValue() {
    return this.userForm['controls'];
  }

  


  ngOnInit(): void {
    this.buildUserform();
  }
  
  buildUserform() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [''],
      phoneNo: [''],
      dateOfEmpmt: [''],
      gender: [''],
      department: ['']

    });
  }

  onSubmit() {
    console.log('submit working')
    console.log(this.userForm);
    if (this.userForm.status === 'VALID') {
      this.service.create(this.userForm.value).subscribe();
      this.router.navigate(['/user-forms/user-list'])
      
    }

  }

}

