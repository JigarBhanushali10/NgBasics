import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityServiceService } from 'src/app/shared/service/utility-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.scss'],
})
export class LoginPageComponent implements OnInit {
  userName: string = ''
  password: string = ''
  creads: any
  showRegister: boolean = false
  showLoader: boolean = false
  newUser: FormGroup;
  newUsersCount: number;
  count: number = 0;
  admin: any = {}

  constructor(private router: Router, private service: UtilityServiceService, private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.buildUserform();
    this.getCreds()
  }

  getCreds() {
    this.service.login().subscribe((data: any) => this.creads = data)
  }
  getUserName(event: any) {
    this.userName = event.value
  }
  getPassword(event: any) {
    this.password = event.value

  }

  login() {
    // this.getCreds()
    this.admin = this.creads.find((ele: { [x: string]: string; }) => ele['userName'] === this.userName)

    if (this.admin?.['userName'] == this.userName && this.admin?.['password'] == this.password) {
      this.showLoader = !this.showLoader
      localStorage.clear()
      localStorage.setItem('userName', this.admin?.['userName'])
      localStorage.setItem('password', this.admin?.['password'])
      localStorage.setItem('role', this.admin?.['role'])
      setTimeout(() => {
        this.router.navigateByUrl('/')
      }, 3000);
    }
    else {

      this.validateAllFormFields(this.newUser); //{7}
    }

  }

  register() {
    this.showRegister = !this.showRegister
  }
  buildUserform() {
    this.newUser = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get getValue() {
    return this.newUser['controls'];
  }

  signUp() {
    this.getCreds()
    if (this.newUser.valid) {
      this.service.register(this.newUser.value).subscribe();
      this.showRegister = !this.showRegister
      this.newUser.reset()
    } else {
      this.validateAllFormFields(this.newUser); //{7}
    }

  }


  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }

  
}
