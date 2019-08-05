import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder,Validators, FormArray} from '@angular/forms';
import { EmployeeService } from './employee.service';
//import { IEmployee } from './IEmployee';
import { ISkill } from './ISkill';
import { CustomValidators } from '../shared/custom.validators';

import { Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { ILocation } from './ILocation';
//import { ISearch } from './ISearch';
import { ISelect } from './ISelect';


import { from } from 'rxjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { DxDataGridComponent, DxDataGridModule, DxCheckBoxModule } from 'devextreme-angular';
import {Sort}
from 
'@angular/material/sort';
import { sendRequest } from 'selenium-webdriver/http';
import value from 'globalize';

 
export interface IEmployee {
  fullName: string;
  
  email: string;
  
  }








@Component({
  selector: 'app-dashbord-employee',
  templateUrl: './dashbord-employee.component.html',
  styleUrls: ['./dashbord-employee.component.css']
})
export class DashbordEmployeeComponent implements OnInit {
  employeeForm2:FormGroup

  employees: IEmployee[];

  empdash: ISelect[];
  searchTerm: string; 

  public show:boolean = false;
  public buttonName:any = 'Show';


  state: boolean = false;

isAllowed = (optional) => {
  return optional === 0 ? true : this.state;
}

  searches: ISelect[] = [
    { id:1, name: 'EMPinfo' },
    {id:2, name: 'DEPinfo' }
   
  ];
 


  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private _employeeService: EmployeeService,
    private router:Router) { }




  ngOnInit() {
    

    



    this.employeeForm2 = this.fb.group({
   select:['DEPinfo']


    });

  }



  changeState = () => {
    this.state = !this.state;
  }



clicked(){

  
  this.employeeForm2.get('select').valueChanges.subscribe(
    value => {

      console.log( this.employeeForm2.get('select').value);     
   //    console.log(value);
  
  
      if(value =="EMPinfo")

      { 
        this.show = !this.show;

     console.log('In Emp');
     //if(this.show)  
    // this.buttonName = "Hide";
  // else
    this.buttonName = "Show";
        this._employeeService.getEmployees(). subscribe(
            (employeeList) => this.employees = employeeList,
            (err) => console.log(err)
          );
      
      }



      else if(value =="DEPinfo")
     
      
      {

       this.show = !this.show;

        this.buttonName = "Hide";
       // this.employeeForm2.reset();

     //  this.router.navigate(['/employees/dep']);

        console.log(' IN DEP');
        
        
      }
      
    

    }
  );

 




}


  /*
  onSubmit (): void 
{
console.log(' IN submit');

  this.employeeForm2.get('select').valueChanges.subscribe(
    value => {

      console.log( this.employeeForm2.get('select').value);     
   //    console.log(value);


      if(value =="EMPinfo")

      { 
     console.log('In Emp');

        this._employeeService.getEmployees(). subscribe(
            (employeeList) => this.employees = employeeList,
            (err) => console.log(err)
          );
      
      }



      else if(value =="DEPinfo")
     
      
      {
        this.employeeForm2.reset();

     //  this.router.navigate(['/employees/dep']);

        console.log(' IN DEP');
        
        
      }
      
    

    }
  );




  }


  */
  selectName(){
    
  }




  }










 



/*
  onSubmit(): void {
  
  
    this.router.navigate(['employees']);
  
  }
  


*/






