import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveDemoRoutingModule } from './reactive-demo-routing.module';
import { ReactiveDemoComponent } from './reactive-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveDemoListComponent } from './reactive-demo-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ReactiveDemoComponent,
    ReactiveDemoListComponent
  ],
  imports: [
    ReactiveDemoRoutingModule,
    SharedModule
  ]
})
export class ReactiveDemoModule { }
