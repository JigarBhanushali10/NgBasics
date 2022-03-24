import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department, Employee } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm: FormGroup;
  empToEdit: number;
  departmentDetails: Department[];

  @Input() id: number = 0;

  @Output() close: EventEmitter<Event>;


  constructor(private userFormBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
       
    this.close = new EventEmitter<Event>();

    }

  ngOnInit(): void {
    this.buildForm();
    this.getDepartmentData();

    if (this.id !=0 ) {
      this.editEmployee(this.id);
    }
  }

  public buildForm() {
    this.employeeForm = this.userFormBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phoneNo: ['', Validators.required],
      dateOfEmployment: [''],
      gender: [''],
      department: ['']
    });
  }

  getDepartmentData() {
    this.employeeService.getDepartments().subscribe((res: Department[]) => {
      this.departmentDetails = res;
    })
  }

  saveEmployee() {
    if (this.id!= 0) {
      this.updateEmployee(this.id);
      
     
    } else {
      this.addEmployee();
    }
   
  }

  public editEmployee(id: number) {
    this.employeeService.getById(id).subscribe((res: Employee) => {
      console.log(res, this.getValue);
      this.employeeForm.patchValue(res);
    })
  }

  public addEmployee() {
    const employeeData = this.employeeForm.value
    this.employeeService.addEmployee(employeeData).subscribe((res: Employee) => {
      this.close.emit();
    })
  }

  public updateEmployee(id: number) {
    this.employeeService.editEmployee(id, this.employeeForm.value).subscribe((res: Employee) => {
      this.close.emit();
    })
  }

  // public getbyId(id: number){
  //   this.employeeService.getById(id).subscribe((res: Employee) => {})
  // }

  onReset() {
    this.employeeForm.reset();
    console.log('close click');
    this.close.emit();
  }

  get getValue() {
    return this.employeeForm
  }
 



}


