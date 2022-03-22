import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeBuilderComponent } from './resume-builder.component';
import { ResumeListComponent } from './components/resume-list/resume-list.component';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ResumeBuilderComponent,
    ResumeListComponent,
    ResumeFormComponent,
    ResumeViewComponent,
  ],
  imports: [
    ResumeBuilderRoutingModule,
    // ReactiveFormsModule,
    SharedModule
  ]
})
export class ResumeBuilderModule { }
