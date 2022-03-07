import { Component, OnInit } from '@angular/core';
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


  constructor(private userFormBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDepartmentData();

    const id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.buildForm();

    if (id) {
      this.editEmployee(id);
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

  saveEmployee(id?: number) {
    if (id) {
      this.updateEmployee(id);
    } else {
      this.addEmployee();
    }
  }

  public editEmployee(id: number) {
    this.employeeService.getById(id).subscribe((res: Employee) => {
      console.log(res, this.getValue);
      this.employeeForm.patchValue(res);
      this.empToEdit = res.id;
    })
  }

  public addEmployee() {
    const employeeData = this.employeeForm.value
    this.employeeService.addEmployee(employeeData).subscribe((res: Employee) => {
      this.router.navigateByUrl('/employee/employee-list')
    })
  }

  public updateEmployee(id: number) {
    this.employeeService.editEmployee(id, this.employeeForm.value).subscribe((res: Employee) => {
      this.router.navigateByUrl('/employee/employee-list')
    })
  }

  onReset() {
    this.employeeForm.reset();
  }

  get getValue() {
    return this.employeeForm
  }
}
