import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityServiceService } from 'src/app/shared/service/utility-service.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styles: [
  ]
})
export class MasterComponent implements OnInit {
  userName: string | null

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userName = this.getName();
    if (!this.userName) {
      this.router.navigateByUrl('login')
    }else{
      this.router.navigateByUrl('/')
    }
  }
  getName() {
    return localStorage.getItem('userName')
  }

}
