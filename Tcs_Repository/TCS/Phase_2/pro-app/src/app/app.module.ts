import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { ProfComponent } from './prof/prof.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewUserInfo } from './project.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    ProfComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule, HttpClientModule
  ],
  providers: [NewUserInfo],
  bootstrap: [AppComponent]
})
export class AppModule { }
