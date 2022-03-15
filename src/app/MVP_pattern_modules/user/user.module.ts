import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFromPresentationComponent } from './user-form-container/user-from-presentation/user-from-presentation.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MvpUserService } from './service/mvp-user.service';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';


@NgModule({
  declarations: [
    UserComponent,
    UserListContainerComponent,
    UserFormContainerComponent,
    UserFromPresentationComponent,
    UserListPresentationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
 
  providers:[MvpUserService]
})
export class UserModule { }
