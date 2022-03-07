import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { UserDetails } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public userDetails: UserDetails[];

  @Output() editUserEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor(private userServices: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsersData()
  }

  // function to get list of users
  getUsersData() {
    this.userServices.getUsers().subscribe((res: UserDetails[]) => {
      this.userDetails = res;
    })
  }

  // function to delete user

  public deleteUser(id: number) {
    this.userServices.deleteUser(id).subscribe((res) => {
      this.getUsersData();
    })
  }
  //  fucntion to send id of user and na
  public editUser(id: number) {
    this.editUserEmitter.emit(id);
  }
}
