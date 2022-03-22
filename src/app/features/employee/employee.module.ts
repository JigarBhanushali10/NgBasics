import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { IdToNamePipe } from './pipes/id-to-name.pipe';
import { OverlayModule } from '@angular/cdk/overlay';
import { SharedModule } from 'src/app/shared/shared.module';


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
    SharedModule,
    OverlayModule
  ]
})
export class EmployeeModule { }
