import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewassesmentComponent } from './newassesment/newassesment.component';
import { CrudService } from '../user-form/services/crud.service'
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path: '', component: NewassesmentComponent
      }
    ]
  }
];

@NgModule({
  declarations: [NewassesmentComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CrudService]
})

export class NewassesmentModule { } 
