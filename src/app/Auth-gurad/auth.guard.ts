
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ResumeFormComponent } from '../features/resume-builder/components/resume-form/resume-form.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild, CanDeactivate<ResumeFormComponent>{
  userName: string | null
  password: string | null
  constructor(private router: Router,) {
    this.userName = this.getName()
    this.password = this.getPassword()

  }

  canDeactivate(component: ResumeFormComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (component.resumeForm) {
      return true
    } else {
      confirm('leave unsaved changes')
      return false
    }
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return true;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!(this.userName && this.password)) {
      return true;
    } else {
      this.router.navigateByUrl('/')
      return false
    }
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (this.userName && this.password) {
      return true;
    }
    else {
      this.router.navigateByUrl('login')
      return false
    }
  }


  getName() {
    return localStorage.getItem('userName')
  }
  getPassword() {
    return localStorage.getItem('password')
  }

}
