import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/features/Assesment/users/models/user.model';
import { MvpMentorService } from '../service/mvp-mentor.service';

@Component({
  selector: 'app-mentor-form-container',
  templateUrl: './mentor-form-container.component.html',
  styleUrls: ['./mentor-form-container.component.scss']
})
export class MentorFormContainerComponent implements OnInit {

  public mentorData$: Observable<UserDetails>

  private _id: number;

  constructor(private mvpMentorService: MvpMentorService,
    private router: Router,
    private active: ActivatedRoute) { }

  ngOnInit(): void {
    this._id = this.active.snapshot.params['id'];
    if (this._id) {
      this.mentorData$ = this.mvpMentorService.getById(this._id);
    }
  }
  public addData(Data: UserDetails) {
    this.mvpMentorService.addMentor(Data).subscribe(() => {
      this.router.navigateByUrl('/mvpMentor/list')
    })
  }
  public editData(Data: UserDetails) {
    this.mvpMentorService.editMentor(this._id,Data).subscribe(() => {
      this.router.navigateByUrl('/mvpMentor/list')
    })
  }
}