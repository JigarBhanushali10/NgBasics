import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { UserFormRoutingModule } from './user-form-routing.module';
import { UserFormComponent } from './user-form.component';
import { UserFormListComponent } from './components/user-form-list/user-form-list.component';
import { UserFormInputComponent } from './components/user-form-input/user-form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrudService } from './services/crud.service';



@NgModule({
  declarations: [
    UserFormComponent,
    UserFormListComponent,
    UserFormInputComponent,
  
  ],
  imports: [
    CommonModule,
    UserFormRoutingModule,
    // ReactiveFormsModule,
    // HttpClientModule,               
    SharedModule
    
  
  ],
  providers:[
    CrudService
  ]
 
  
})
export class UserFormModule { }
