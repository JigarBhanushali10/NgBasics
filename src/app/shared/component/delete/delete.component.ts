import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {


  @Output() close: EventEmitter<Event>;
  @Output() delete: EventEmitter<Event>


  constructor() {
    this.close = new EventEmitter<Event>();
    this.delete = new EventEmitter<Event>();

  }

  ngOnInit(): void {
  }


  deleteData() {
    this.delete.emit();

  }
  closeBox() {
    this.close.emit();
  }
}
