import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Department } from 'src/app/features/employee/model/employee.model';
import { MentorFilterPresenterService } from '../mentor-filter-presenter/mentor-filter-presenter.service';

@Component({
  selector: 'app-mentor-filter-presentation',
  templateUrl: './mentor-filter-presentation.component.html',
  styleUrls: ['./mentor-filter-presentation.component.scss']
})
export class MentorFilterPresentationComponent implements OnInit {

  @Input() public set departmentList(value: Department[] | null) {
    if (value) {
      this._departmentList = value;


    }
  }

  public get departmentList(): Department[] | null {

    return this._departmentList;
  }

  @Output() close: EventEmitter<Event>;
  
  @Output() filterFormData: EventEmitter<FormGroup>;


  private _departmentList: Department[];
  public filteredForm: FormGroup;


  constructor(private filterService: MentorFilterPresenterService) {

    this.filteredForm = this.filterService.buildForm();


    this.close = new EventEmitter<Event>();
    this.filterFormData = new EventEmitter<FormGroup>();
  }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit();

  }

  onSubmit() {
    this.filterService.submitForm(this.filteredForm)
    this.onClose()
    this.filterFormData.emit(this.filteredForm);

  }
}
