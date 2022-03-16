import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/features/Assesment/users/models/user.model';
import { MentorListPresenterService } from '../mentor-list-presenter/mentor-list-presenter.service';

@Component({
  selector: 'app-mentor-list-presentation',
  templateUrl: './mentor-list-presentation.component.html',
  styleUrls: ['./mentor-list-presentation.component.scss'],
  viewProviders: [MentorListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorListPresentationComponent implements OnInit {

  @Input() public set userList(value: UserDetails[] | null) {
    if (value) {
      this._userList = value;
      console.log(this._userList);
    }
  }

  public get userList(): UserDetails[] | null {
    console.log(this._userList);
    return this._userList;
  }

  @Output() public delete: EventEmitter<number>;

  private _userList: UserDetails[];



  constructor(private mentorListPresenterService: MentorListPresenterService,
    private router: Router) {
    this.delete = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.mentorListPresenterService.delete$.subscribe((id: number) => {
      this.delete.emit(id);
    });
  }

  public onDelete(id: number) {
    this.mentorListPresenterService.delete(id);
  }


  onEdit(id: number) {
    this.router.navigateByUrl(`mvpMentor/edit/${id}`);
  }
}
