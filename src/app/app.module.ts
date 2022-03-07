import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// -----------------------------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingModule } from './features/data-binding/data-binding.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { UserFormModule } from './features/user-form/user-form.module';


@NgModule({
  declarations: [
    AppComponent,


  ],

  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    DataBindingModule,
    HttpClientModule,
    BrowserAnimationsModule



  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
