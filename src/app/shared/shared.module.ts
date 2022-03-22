import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { DeleteComponent } from './component/delete/delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [PhoneMaskDirective, DeleteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  exports: [
    PhoneMaskDirective,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class SharedModule { }
