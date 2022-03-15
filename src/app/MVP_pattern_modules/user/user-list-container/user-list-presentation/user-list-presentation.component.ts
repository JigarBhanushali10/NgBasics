import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserDetails } from 'src/app/features/Assesment/users/models/user.model';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  viewProviders: [UserListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListPresentationComponent implements OnInit {

  @Input() public set userList(value: UserDetails[] | null) {
    if (value) {
      this._userList = value;
      console.log("heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeelo");
      console.log(this._userList);
    }
  }

  public get userList(): UserDetails[] | null {
    console.log(this._userList);
    return this._userList;
  }

  @Output() public delete: EventEmitter<number>;

  private _userList: UserDetails[];



  constructor(private userListPresenterService: UserListPresenterService) {
    this.delete = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.userListPresenterService.delete$.subscribe((id: number) => {
      this.delete.emit(id);
    });
  }

  public onDelete(id: number) {
    this.userListPresenterService.delete(id);
  }
}
