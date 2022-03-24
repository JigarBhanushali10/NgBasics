import { isNgTemplate } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/features/Assesment/users/models/user.model';
import { Department } from 'src/app/features/employee/model/employee.model';
import { MentorListPresenterService } from '../mentor-list-presenter/mentor-list-presenter.service';
import { MentorFilterPresenterService } from './mentor-filter-presenter/mentor-filter-presenter.service';

@Component({
  selector: 'app-mentor-list-presentation',
  templateUrl: './mentor-list-presentation.component.html',
  styleUrls: ['./mentor-list-presentation.component.scss'],
  viewProviders: [MentorListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorListPresentationComponent implements OnInit {
  filteredValue: any;
  filteredUsers : UserDetails

  @Input() public set userList(value: UserDetails[] | null) {
    if (value) {
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

  private _userList: UserDetails[];

  private _departmentsList: Department[];

  constructor(private mentorListPresenterService: MentorListPresenterService, private filterService: MentorFilterPresenterService,
    private router: Router) {
    this.delete = new EventEmitter<number>();

    this.mentorListPresenterService.filteredData$.subscribe((filteredData: UserDetails) => {
      this.filteredUsers = filteredData
      console.log("from tation",filteredData);
      
  
    });
    console.log("from tation",this.filteredUsers);
    
  }

  ngOnInit(): void {
    this.mentorListPresenterService.delete$.subscribe((id: number) => {
      this.delete.emit(id);
    });




    // this.filterService.filterForm$.subscribe((res) => {
    //   // this.myfilter(res);
    //   console.log("msntor list  tation",res);
    //   this.filteredValue = res

    // })

  }

  public onDelete(id: number) {
    this.mentorListPresenterService.delete(id);
  }


  onEdit(id: number) {
    this.router.navigateByUrl(`mvpMentor/edit/${id}`);
  }

//   filteredvalue(data:any) {
// this.mentorListPresenterService.getfilterValue(data)
//   }
  openFilter() {
    this.mentorListPresenterService.displayOverlay(this._departmentsList,this._userList)

  }
  // myfilter(filters:any){
  //   this._userList = this.mentorListPresenterService
  // }
}
