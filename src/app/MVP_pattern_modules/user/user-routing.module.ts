import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFromPresentationComponent } from './user-form-container/user-from-presentation/user-from-presentation.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent
  ,
  children:[
    {
      path: '', redirectTo: 'list', pathMatch: 'full'
    },
    {
      path: 'list', component: UserListPresentationComponent
    },
    {
      path: 'add', component: UserFromPresentationComponent
    }
  ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
