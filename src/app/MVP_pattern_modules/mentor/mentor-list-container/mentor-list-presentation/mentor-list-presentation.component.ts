
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/features/Assesment/users/models/user.model';
import { Department } from 'src/app/features/employee/model/employee.model';
import { MentorListPresenterService } from '../mentor-list-presenter/mentor-list-presenter.service';

@Component({
  selector: 'app-mentor-list-presentation',
  templateUrl: './mentor-list-presentation.component.html',
  styleUrls: ['./mentor-list-presentation.component.scss'],
  viewProviders: [MentorListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorListPresentationComponent implements OnInit {
  filteredValue: any;
  
  @Input() public set userList(value: UserDetails[] | null) {
    if (value) {
      if (this._userListOrig == null) {
        this._userListOrig = value;
      }
      this._userList = value;

      console.log(this._userList);
    }
  }

  public get userList(): UserDetails[] | null {

    return this._userList;
  }

  @Input() public set departmentList(value: Department[] | null) {
    if (value) {
      this._departmentsList = value;

      console.log(this._departmentsList);
    }
  }

  public get departmentList(): Department[] | null {

    return this._departmentsList;
  }

  @Output() public delete: EventEmitter<number>;

  private _userListOrig: UserDetails[] | null = null;
  private _userList: UserDetails[];
  filteredUsers : UserDetails[]

  private _departmentsList: Department[];


  // set NewfilteredUsers(value: UserDetails[] | null) {
  //   if (value) {
  //     this.filteredUsers = value;

  //     console.log(hithis.filteredUsers);
  //   }
  // } 

  constructor(
    private mentorListPresenterService: MentorListPresenterService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef) {
    this.delete = new EventEmitter<number>();

    this.mentorListPresenterService.filteredData$.subscribe((filteredData: UserDetails[]) => {
      
      this._userList = filteredData;
      console.log("from tation1",this._userList);
      this.changeDetectorRef.markForCheck()
    });
    
    
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


  openFilter() {
    if (this._userListOrig) {
      this.mentorListPresenterService.displayOverlay(this._departmentsList,this._userListOrig)
    }

  }
 
}
