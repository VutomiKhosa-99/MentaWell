import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartModule } from 'angular-highcharts';
import { FormsModule } from "@angular/forms";
import { PickerModule } from "@ctrl/ngx-emoji-mart";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    PickerModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule
=======
    HttpClientModule

>>>>>>> 82b290fa92f26e2dde4955ba40664616e385922a
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
