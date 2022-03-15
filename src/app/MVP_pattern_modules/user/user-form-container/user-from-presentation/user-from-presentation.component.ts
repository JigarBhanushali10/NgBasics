import { Component, OnInit } from '@angular/core';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-from-presentation',
  templateUrl: './user-from-presentation.component.html',
  styleUrls: ['./user-from-presentation.component.scss'],
viewProviders:[UserFormPresenterService]
})
export class UserFromPresentationComponent implements OnInit {

  constructor(private userFormPresenter: UserFormPresenterService) { }

  ngOnInit(): void {
  }

}
