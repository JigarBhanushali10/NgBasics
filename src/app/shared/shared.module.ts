import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { DeleteComponent } from './component/delete/delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdToNamePipe } from './pipes/id-to-name.pipe';
import { OverlayModule } from '@angular/cdk/overlay';
import {DragDropModule} from '@angular/cdk/drag-drop';
 




@NgModule({
  declarations: [PhoneMaskDirective, DeleteComponent, IdToNamePipe],
  imports: [],
  exports: [
    PhoneMaskDirective,
    ReactiveFormsModule,
    FormsModule,
    IdToNamePipe,
    OverlayModule,
    DragDropModule,
    CommonModule,
  ],
})
export class SharedModule { }
