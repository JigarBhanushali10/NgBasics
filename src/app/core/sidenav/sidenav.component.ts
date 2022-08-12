import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  userName: string | null
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = this.getName();
  }


  logout() {
    let text = "Are you sure you want to logout?"
    if (confirm(text) == true) {
      localStorage.clear()
      this.router.navigateByUrl("login")
    } else {
      return
    }
  }



  getName() {
    return localStorage.getItem('userName')
  }

}
