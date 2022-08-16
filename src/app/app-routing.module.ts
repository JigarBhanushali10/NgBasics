import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth-gurad/auth.guard';
import { LoginPageComponent } from './core/login-page/login-page.component';
import { MasterComponent } from './core/master/master.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { JavascriptComponent } from './features/javascript/javascript.component';



const routes: Routes = [


  {
    path: "",
    component: MasterComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'data-binding',
        loadChildren: () => import('../app/features/data-binding/data-binding.module').then(m => m.DataBindingModule)
      },
      {
        path: 'directives',
        loadChildren: () => import('../app/features/directives/directives.module').then(m => m.DirectivesModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('../app/features/reactive-demo/reactive-demo.module').then(m => m.ReactiveDemoModule)
      },

      {

        path: 'user-forms',
        loadChildren: () => import('../app/features/user-form/user-form.module').then(m => m.UserFormModule)
      },
      {

        path: 'employee',
        loadChildren: () => import('../app/features/employee/employee.module').then(m => m.EmployeeModule)
      },
      {
        path: 'resume', canLoad: [AuthGuard],
        loadChildren: () => import('./features/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule)
      },
      {
        path: 'newassesment',
        loadChildren: () => import('./features/newassesment/newassesment.module').then(m => m.NewassesmentModule)
      },
      {
        path: 'Users',
        loadChildren: () => import('./features/Assesment/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'ngTemplate',
        loadChildren: () => import('./features/ng-template-outlet/ng-template-outlet.module').then(m => m.NgTemplateOutletModule)
      },
      {
        path: 'javascript', component: JavascriptComponent
      },
      { path: 'mvpMentor', loadChildren: () => import('./MVP_pattern_modules/mentor/mentor.module').then(m => m.MentorModule) },


      { path: 'subject', loadChildren: () => import('./features/subject/subject.module').then(m => m.SubjectModule) },
      { path: 'file-upload', loadChildren: () => import('./MVP_pattern_modules/file-upload/file-upload.module').then(m => m.FileUploadModule) },

    ]
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
