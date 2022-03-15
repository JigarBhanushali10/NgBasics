import { Component, OnInit } from '@angular/core';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  viewProviders:[UserListPresenterService]
})
export class UserListPresentationComponent implements OnInit {

  constructor(private userListPresenterService:UserListPresenterService) { }

  ngOnInit(): void {
  }

}
