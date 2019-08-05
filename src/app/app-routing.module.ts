import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ListEmployeesComponent } from './employee/list-emloyee.component';
//import { CreateEmployeeComponent } from './employee/create-emloyee.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
//import { ProfileComponent } from './employee/profile-employee.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
   { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {path: 'profile', component: ProfileComponent},
   { path: 'employees', loadChildren: './employee/employee.module#EmployeeModule' },

  { path: '**', component: PageNotFoundComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

