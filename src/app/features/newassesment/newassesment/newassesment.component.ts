import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CrudService } from '../services/crud.service';


@Component({
  selector: 'app-newassesment',
  templateUrl: './newassesment.component.html',
  styleUrls: ['./newassesment.component.scss']
})
export class NewassesmentComponent implements OnInit, AfterViewInit {
  crudData: Array<any> = [];
  selectDataArray: Array<Number>=[];
  name: string = '';
  age: string = ''; 
  updateId: number;
  showAdd: boolean = true;

  @ViewChild('ele1') test: ElementRef;

  constructor(private service: CrudService) {
   }

  ngOnInit(): void {
    this.crudData = this.crudData.concat(this.service.NewUsers);
    this.assignID();
  }

  assignID(): void{
    this.crudData.forEach((data,index)=>{
      data.id = index;
    })
  }

  ngAfterViewInit(): void {
    this.test.nativeElement.style.color = 'red';
  }

  selectedData(no: Number): void{
    // debugger
    let index = this.selectDataArray.indexOf(no);
    if(index == -1){
      this.selectDataArray.push(no);
    }
    else{
      this.selectDataArray.splice(index,1);
    }
  }

  deletFunc(): void{
    // debugger
    this.selectDataArray.forEach((no)=>{
      this.crudData.splice(this.crudData.indexOf(no),1);
      this.selectDataArray.splice(Number(no),1);
    })
  }

  addFunc(): void{
    this.crudData.push(
      {name: this.name, Age: this.age}
    )
    this.assignID()
  }

  openUpdate(name: string,age: string, id: any): void{
    this.name = name;
    this.age = age;
    this.updateId = id;
    this.showAdd = false;
  }

  update(): void{
    this.crudData[this.updateId].name = this.name;
    this.crudData[this.updateId].Age = this.age;
    this.showAdd = true;
  }

  cancel(): void{
    this.showAdd=true;
    this.name = '';
    this.age = '';
  }

}
