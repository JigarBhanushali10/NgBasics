import { Component, OnInit } from '@angular/core';
import { ClientName } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  idToEdit: number;
  clientName: ClientName[];
  showForm: boolean = false;
  // showFormChange: boolean = false;
  btnDisabled: boolean = false;

  constructor(private userServices: UserService) { }

  ngOnInit(): void {
    this.getClientNames();
  }

  public getClientNames() {
    this.userServices.getClients().subscribe((res: ClientName[]) => {
      this.clientName = res;
    })
  }

  getUserToEdit(id: number): void {
    this.idToEdit = id;
  }

  toogleForm() {

    this.showForm = true;

    this.btnDisabled = true;

    console.log(this.showForm, this.btnDisabled);
    
    // this.route.navigateByUrl(`Users`)
  }
  
  showFormChange() {
    console.log('oko');
    console.log('1',this.showForm, this.btnDisabled);
    this.showForm = false;
    this.btnDisabled = false;
    console.log('2',this.showForm, this.btnDisabled);
  }
}
