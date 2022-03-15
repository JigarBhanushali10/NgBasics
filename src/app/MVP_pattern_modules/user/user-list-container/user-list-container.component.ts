import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { UserDetails } from 'src/app/features/Assesment/users/models/user.model';
import { MvpUserService } from '../service/mvp-user.service';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss']
})
export class UserListContainerComponent implements OnInit {

  public userList$: Observable<UserDetails[]>

  

  constructor(private mvpUserService: MvpUserService) {
   
    this.userList$ = new Observable();

   }
   
  ngOnInit(): void {
    this.userList$ = this.mvpUserService.getUsers();

  }

  delete(id: number) {
    this.mvpUserService.deleteUser(id).subscribe(() => {
      console.log("deleted: ", id);
    });
  }

}
