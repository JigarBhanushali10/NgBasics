import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientName, Offices, UserDetails } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() showForm: boolean;
  @Output() showFormChange: EventEmitter<boolean> = new EventEmitter<boolean>();
 
  
  userForm: FormGroup;
  officeDetails: Offices[];
  clientName: ClientName[];

  @Input() idOfUserToEdit: number;

  constructor(private userFormBuilder: FormBuilder,
    private userServices: UserService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.userBuildForm()
    this.getOfficeDetails()
    this.getClientNames()
  }

  public userBuildForm() {
    this.userForm = this.userFormBuilder.group({
      id: ['',],
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phoneNo: ['', Validators.required],
      clientName: ['', Validators.required],
      office: ['', Validators.required],
    });
    console.log(this.userForm)
  }
  // function to get office details

  public getOfficeDetails() {
    this.userServices.getOffices().subscribe((res: Offices[]) => {
      this.officeDetails = res;
    })
  }
  // function to get office details

  public getClientNames() {
    this.userServices.getClients().subscribe((res: ClientName[]) => {
      this.clientName = res;
    })
  }

  // function to add user

  saveUser() {

    // debugger
    if (this.userForm.valid) {
      this.addUser();


    }
    else {
      this.validateAllFormFields(this.userForm);
    }





  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control?.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  public addUser() {
    const userData = this.userForm.value
    this.userServices.addUser(userData).subscribe((res: UserDetails) => {
      alert('added')
      this.onCancel();
    })
  }





  // function to patch user data into user
  public editUser(id: number) {
    this.userServices.getById(id).subscribe((res: UserDetails) => {
      this.userForm.patchValue(res);
      this.idOfUserToEdit = res.id;
    })
  }






  onCancel() {
    this.userForm.reset();
    this.showForm = false;
    this.showFormChange.emit(this.showForm);
  }


  // showForm: boolean = false;

  // btnDisabled: boolean = false
  // toogleForm() {

  //   this.showForm = true

  //   this.btnDisabled = true;
  //   // this.route.navigateByUrl(`Users`)
  // }


  get getValue() {
    return this.userForm['controls'];
  }
}
