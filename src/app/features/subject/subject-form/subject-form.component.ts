import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {
  private idToEdit: number;
  public userForm: FormGroup;


  constructor(private subjectService : SubjectService,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.generateForm();
    this.subjectService.userToEdit$.subscribe((res) => {
      // console.log(res);
      this.idToEdit = res.id;
      this.userForm.patchValue(res);
    })
  }

  generateForm(): void {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      age: ['']
    });
  }
  onSubmit(): void {
    if (this.idToEdit) {
      this.subjectService.updateData(this.idToEdit, this.userForm.value);
      alert("User Updated");
    }else{
      this.subjectService.create(this.userForm.value);
      alert("User Added");
    }
    this.reset();
  }

  reset() {
    this.userForm.reset();
  }
}
