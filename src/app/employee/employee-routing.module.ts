import { NgModule } from '@angular/core';
// Import RouterModule & Routes type
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import all the components that we will be referencing in the route definitions
import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeesComponent } from './list-employee.component';

import { DashbordEmployeeComponent } from './dashbord-employee.component';


// Define the routes
const appRoutes: Routes = [
    
     
        { path: '', component: ListEmployeesComponent },
        { path: 'create', component: CreateEmployeeComponent },
        { path: 'edit/:id', component: CreateEmployeeComponent },
        {path: 'dashbord', component: DashbordEmployeeComponent}
    
  ];



@NgModule({
  imports: [ 
   Ng2SearchPipeModule ,
   FormsModule ,
    RouterModule.forChild(appRoutes)
   
  
  ],
  exports: [ RouterModule ]
})
export class EmployeeRoutingModule { }