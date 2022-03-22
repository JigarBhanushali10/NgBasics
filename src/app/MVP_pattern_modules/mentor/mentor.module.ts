import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorComponent } from './mentor.component';
import { MentorListContainerComponent } from './mentor-list-container/mentor-list-container.component';
import { MentorFormContainerComponent } from './mentor-form-container/mentor-form-container.component';
import { MentorListPresentationComponent } from './mentor-list-container/mentor-list-presentation/mentor-list-presentation.component';
import { MentorFromPresentationComponent } from './mentor-form-container/mentor-from-presentation/mentor-from-presentation.component';
import { MentorRoutingModule } from './mentor-routing.module';
import { MvpMentorService } from './service/mvp-mentor.service';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MentorComponent,
    MentorListContainerComponent,
    MentorFormContainerComponent,
    MentorFromPresentationComponent,
    MentorListPresentationComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    SharedModule
  ],
 
  providers:[MvpMentorService]
})
export class MentorModule { }
