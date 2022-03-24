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
import { MentorFilterPresentationComponent } from './mentor-list-container/mentor-list-presentation/mentor-filter-presentation/mentor-filter-presentation.component';
import { MentorFilterPresenterService } from './mentor-list-container/mentor-list-presentation/mentor-filter-presenter/mentor-filter-presenter.service';



@NgModule({
  declarations: [
    MentorComponent,
    MentorListContainerComponent,
    MentorFormContainerComponent,
    MentorFromPresentationComponent,
    MentorListPresentationComponent,
    MentorFilterPresentationComponent,
    
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    SharedModule,
  ],
 
  providers:[MvpMentorService,MentorFilterPresenterService]
})
export class MentorModule { }
