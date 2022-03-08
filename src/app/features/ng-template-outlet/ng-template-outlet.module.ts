import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTemplateOutletRoutingModule } from './ng-template-outlet-routing.module';
import { NgTemplateOutletComponent } from './ng-template-outlet.component';
import { ViewComponent } from './components/view/view.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgTemplateOutletComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    NgTemplateOutletRoutingModule,
    FormsModule
  ]
})
export class NgTemplateOutletModule { }
