import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { UserDetails } from 'src/app/features/Assesment/users/models/user.model';
import { Department } from 'src/app/features/employee/model/employee.model';
import { MvpMentorService } from '../service/mvp-mentor.service';

@Component({
  selector: 'app-mentor-list-container',
  templateUrl: './mentor-list-container.component.html',
  styleUrls: ['./mentor-list-container.component.scss']
})
export class MentorListContainerComponent implements OnInit {

  public userList$: Observable<UserDetails[]>
  public departmentList$: Observable<Department[]>

  

  constructor(private mvpMentorService: MvpMentorService) {
   
    this.userList$ = new Observable();
    this.departmentList$ = new Observable();

   }
   
  ngOnInit(): void {
    this.getmentors();
    this.getDepartments();


  }

  delete(id: number) {
    this.mvpMentorService.deleteMentor(id).subscribe(() => {
      console.log("deleted: ", id);
      this.getmentors();
    });
  }
getmentors(){
  this.userList$ = this.mvpMentorService.getMentors();
}
getDepartments(){
  this.departmentList$ = this.mvpMentorService.getDepartments();
}
}
