import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {EmployeeService } from './employee/employee.service';
//import { EmployeeModule } from './employee/employee.module'; commented for lazy load

//import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';

import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
//import { ProfileComponent } from './profile/profile.component';
//import { EmployeeFilterPipe } from './employee/employee-filter';
import { ReactiveFormsModule } from '@angular/forms';

import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    PageNotFoundComponent
   // ProfileComponent
  ],
  imports: [
    BrowserModule,
    MatSortModule,
  //  EmployeeModule,
  ReactiveFormsModule,
    HttpClientModule,
    //Ng2SearchPipeModule ,
   
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

