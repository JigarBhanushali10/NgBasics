import { Inject, Injectable, InjectionToken, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// -----------------------------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingModule } from './features/data-binding/data-binding.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JavascriptComponent } from './features/javascript/javascript.component';
import { CustomInterceptor } from './core/interceptor/custom.interceptor';
import {DragDropModule} from '@angular/cdk/drag-drop';


// import { UserFormModule } from './features/user-form/user-form.module';


@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
  ],

  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ], 

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
