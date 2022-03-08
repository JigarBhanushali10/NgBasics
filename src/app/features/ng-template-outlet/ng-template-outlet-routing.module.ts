import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgTemplateOutletComponent } from './ng-template-outlet.component';

const routes: Routes = [{ path: '', component: NgTemplateOutletComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgTemplateOutletRoutingModule { }


// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule} from '@angular/forms';
 
// import { AppComponent } from './app.component';
// import { ItemViewComponent } from './item-view.component';
 
// @NgModule({
//   declarations: [
//     AppComponent,
//     ItemViewComponent
//   ],
//   imports: [
//     BrowserModule,FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
 