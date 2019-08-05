import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './IEmployee';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { DxDataGridComponent, DxDataGridModule, DxCheckBoxModule } from 'devextreme-angular';
import {Sort}
from 
'@angular/material/sort';


export interface IEmployee {
  fullName: string;
  
  email: string;
  
  }




@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: IEmployee[];
  searchTerm: string; 
  
 


  constructor(private _employeeService: EmployeeService, 
    private _router :Router) { }
 
  ngOnInit() {
   
    this._employeeService.getEmployees().subscribe(
      (employeeList) => this.employees = employeeList,
      (err) => console.log(err)
    );

   // $scope
  }
 editButtonClick(employeeId: number) {
  this._router.navigate(['/employees/edit', employeeId]);
}



sortData(sort: Sort) {
   
  const data =this.employees.slice();
  console.log('eeeee');
  if (!sort.active || sort.direction === '') {
  this.employees = data;
  return;
  }
  
  this.employees = data.sort((a, b) => {
  const isAsc = sort.direction === 'asc';
  switch (sort.active) {
  case 'name': return compare(a.fullName, b.fullName, isAsc);
  case 'email': return compare(a.email, b.email, isAsc);
  default: return 0;
  }
  });
  }
  

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  
