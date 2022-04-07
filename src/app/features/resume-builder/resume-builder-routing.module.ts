import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Auth-gurad/auth.guard';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { ResumeListComponent } from './components/resume-list/resume-list.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { ResumeBuilderComponent } from './resume-builder.component';

const routes: Routes = [
  {
    path: '',canActivateChild:[AuthGuard],
    children: [
      {
        path: '', redirectTo: 'resume-list', pathMatch: 'full'
      },
      {
        path: '', component: ResumeListComponent
      },
      {
        path: 'resume-list', component: ResumeListComponent
      },
      {
        path: 'resume-view/:id', component: ResumeViewComponent
      },
      {
        path: 'resume-form', component: ResumeFormComponent, canDeactivate: [AuthGuard]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeBuilderRoutingModule { }
