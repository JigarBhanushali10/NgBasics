import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  @Output() newItemEvent: EventEmitter<string>
  // @Output() newItemEvent = new EventEmitter<string>();


  constructor() { 
this.newItemEvent = new EventEmitter()
  }

  ngOnInit(): void {
  }
  clickme(value: string){
    this.newItemEvent.emit(value)
  }
  @Input() fromChild2:string=""

}
