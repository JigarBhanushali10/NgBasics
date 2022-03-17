import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectService } from './subject.service';


@NgModule({
  declarations: [
    SubjectComponent,
    SubjectListComponent,
    SubjectFormComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ],
  providers:[SubjectService]
})
export class SubjectModule { }
