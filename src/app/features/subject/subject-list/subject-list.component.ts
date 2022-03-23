import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectService, User } from '../subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  user$: Observable<User[]>
  
  constructor(private subjectService: SubjectService) {
    this.user$ = this.subjectService.user$
    this.user$.subscribe((res) => {
      console.log(res)

    });

  }
  


  ngOnInit(): void {


  }


  editItem(item: User){
    this.subjectService.editData(item);
    // console.log(item);    
  }

  deleteItem(id: number): void {
    this.subjectService.deleteData(id);
  }

  

}