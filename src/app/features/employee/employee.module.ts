import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IdToNamePipe } from './pipes/id-to-name.pipe';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    EmployeeComponent,
    AdminViewComponent,
    UserViewComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    IdToNamePipe,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    OverlayModule
  ]
})
export class EmployeeModule { }
