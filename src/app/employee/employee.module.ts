import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';

import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeesComponent } from './list-employee.component';
import { SharedModule } from '../shared/shared.module';

//import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeFilterPipe } from './employee-filter';
//import { DxButtonModule } from 'devextreme-angular';
//import { DxButtonModule } from 'devextreme-angular/ui/button';

//import{ MaterialModule } from './material.module';
import {MatSortModule} from '@angular/material';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//import { ProfileComponent } from './profile/profile.component';
import { ProfileEmployeeComponent } from './profile-employee.component';
import { DashbordEmployeeComponent } from './dashbord-employee.component';
//import { EmployeeFilter2Pipe } from './employee-filter2.pipe';
 //import { DxDataGridComponent, DxDataGridModule, DxCheckBoxModule } from 'devextreme-angular';
//import { DxButtonModule } from 'devextreme-angular/ui/button';
//import { EmployeeFilterPipe} from './employee-filter.pipe.ts';

//import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    CreateEmployeeComponent,
    ListEmployeesComponent,
    EmployeeFilterPipe,
    DashbordEmployeeComponent,
   //EmployeeFilter2Pipe
   // ProfileComponent,
    

   // EmployeeFilterPipe 

  ],
  imports: [
 
    

    EmployeeRoutingModule,
    //Ng2SearchPipeModule ,
    FormsModule ,
    //DxDataGridModule,
   // DxCheckBoxModule,
   // DxButtonModule,
    SharedModule,
   // MatSortModule
   
 
    //Material.MatSortModule,
    
  ]
})
export class EmployeeModule { }
 