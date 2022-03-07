import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department, Employee } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employeeDetails: Employee[];
  departments: Department[];
  empToEdit: Employee

  constructor(private employeeService: EmployeeService, private router:Router,private overlay: Overlay) { }

  ngOnInit(): void {
    this.getEmployeesData();
    this.getDepartmentsData();
  }

  getDepartmentsData() {
    this.employeeService.getDepartments().subscribe(data => this.departments = data);
  }

  getEmployeesData() {
    this.employeeService.getEmployees().subscribe((res: Employee[]) => {
      this.employeeDetails = res;
    })

  }

  

  public editEmployee(id: number) {
   
    this.displayOverlay(id)
    }
  

  public deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe((res) => {
      this.getEmployeesData();
    })
  }

  // overlay compontnt
   displayOverlay(id?: number) {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .right(),
        
    });

    const component = new ComponentPortal(EmployeeFormComponent);
    const componentRef = overlayRef.attach(component);

    if(id){
      componentRef.instance.id = id;
    }
    componentRef.instance.close.subscribe(() => {
      overlayRef.detach(); this.getEmployeesData()
    });

  }


}
