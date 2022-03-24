import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserDetails } from 'src/app/features/Assesment/users/models/user.model';
import { Department } from 'src/app/features/employee/model/employee.model';
import { MentorFormPresenterService } from '../mentor-form-presenter/mentor-form-presenter.service';

@Component({
  selector: 'app-mentor-from-presentation',
  templateUrl: './mentor-from-presentation.component.html',
  styleUrls: ['./mentor-from-presentation.component.scss'],
  viewProviders: [MentorFormPresenterService]
})
export class MentorFromPresentationComponent implements OnInit {

  formTitle: string = "Add Mentor";

  @Input() public set mentorData(val: UserDetails | null) {
    if (val) {
      this.formTitle = "Edit Mentor"
      this.mentorForm.patchValue(val);
    }
  }


  @Input() public set departmentList(value: Department[] | null) {
    if (value) {
      this._departmentList = value;

      
    }
  }

  public get departmentList(): Department[] | null {
    
    return this._departmentList;
  }

  @Output() add: EventEmitter<UserDetails>;
  @Output() edit: EventEmitter<UserDetails>;
  private _departmentList: Department[];

  public mentorForm: FormGroup;

  constructor(private mentorFormPresenter: MentorFormPresenterService,) {
    this.add = new EventEmitter();
    this.edit = new EventEmitter();

    this.mentorForm = this.mentorFormPresenter.buildForm();
  }

  ngOnInit(): void {
    this.mentorFormPresenter.mentorForm$.subscribe((Data) => {
      if (this.formTitle === "Add Mentor") {
        this.add.emit(Data)
      }
      else {
        this.edit.emit(Data)
      }
    })
  }


  public onSubmit() {
    this.mentorFormPresenter.submitForm(this.mentorForm)
  }
}
