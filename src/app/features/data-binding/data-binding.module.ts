import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule, routingComponents } from './data-binding-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    routingComponents
  ],
  imports: [
    SharedModule,
    CommonModule,
    DataBindingRoutingModule,
    FormsModule
  ]
})
export class DataBindingModule { }
