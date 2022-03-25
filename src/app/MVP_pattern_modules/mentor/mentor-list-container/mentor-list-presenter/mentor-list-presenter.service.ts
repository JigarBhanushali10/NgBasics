import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { UserDetails } from 'src/app/features/Assesment/users/models/user.model';
import { Department } from 'src/app/features/employee/model/employee.model';
import { MentorFilterPresentationComponent } from '../mentor-list-presentation/mentor-filter-presentation/mentor-filter-presentation.component';

@Injectable()
export class MentorListPresenterService {
  // filteredData: UserDetails
  private _delete: Subject<number>;
  public delete$: Observable<number>;

  private _filteredData: Subject<UserDetails[]>;

  public filteredData$: Observable<UserDetails[]>;

  constructor(private overlay: Overlay) {

    this._delete = new Subject();

    this.delete$ = this._delete.asObservable();

    this._filteredData = new Subject();

    this.filteredData$ = this._filteredData.asObservable();

  }


  public delete(id: number) {
    this._delete.next(id);
  }


  public filteredData(filteredData: UserDetails[]) {
    this._filteredData.next(filteredData);
  }
  public componentRef: ComponentRef<MentorFilterPresentationComponent>

  public overlayRef: OverlayRef
  displayOverlay(departmentList: Department[], userList: UserDetails[]) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .right(),

    });

    const component = new ComponentPortal(MentorFilterPresentationComponent);
    this.componentRef = this.overlayRef.attach(component);

    this.componentRef.instance.departmentList = departmentList;

    this.componentRef.instance.filterFormData.subscribe((data) => {
      this.myfilter(userList, data)

      // console.log("from list presentor",data.value)
    })
    this.componentRef.instance.close.subscribe(() => {
      this.overlayRef.detach();
    });
  }


  myfilter(list: UserDetails[], filters: any) {
    console.log(filters.value);
    list = list.filter(user => {
      console.log(user.gender);
      return user.gender?.toLowerCase() == filters.value.gender?.toLowerCase();
    })
    list = list.filter(user => {
      console.log(user.firstName);
      return user.firstName?.toLowerCase().includes(filters.value.name?.toLowerCase());
    })
    console.log(list);
    this.filteredData(list);
  }
  getfilterValue(data: any) {
    console.log("from list presentor", data)

  }
}