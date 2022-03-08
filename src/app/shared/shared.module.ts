import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { DeleteComponent } from './component/delete/delete.component';




@NgModule({
  declarations: [PhoneMaskDirective, DeleteComponent],
  imports: [
    CommonModule,
  
  ],
  exports: [
    PhoneMaskDirective
  ],
})
export class SharedModule { }
