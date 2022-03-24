import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { DeleteComponent } from './component/delete/delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdToNamePipe } from './pipes/id-to-name.pipe';
import { OverlayModule } from '@angular/cdk/overlay';




@NgModule({
  declarations: [PhoneMaskDirective, DeleteComponent, IdToNamePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  exports: [
    PhoneMaskDirective,
    ReactiveFormsModule,
    FormsModule,
    IdToNamePipe,
    OverlayModule
  ],
})
export class SharedModule { }
