import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// -------------------------------------------------------------
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';

import { DataBindingRoutingModule } from '../features/data-binding/data-binding-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { MasterComponent } from './master/master.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    MasterComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent,  
    LoginPageComponent,
    MasterComponent

  ],
})
export class CoreModule { }
