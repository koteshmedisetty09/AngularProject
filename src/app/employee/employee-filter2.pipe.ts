
import { PipeTransform, Pipe } from '@angular/core';
import { IEmployee } from './IEmployee';
@Pipe({
name: 'employeeFilterSearch ',
})

export class EmployeeFilterPipe implements PipeTransform {
transform(employees: IEmployee[], searchTerm: string,searchTerm1: string) {
    if (!employees || !searchTerm  || searchTerm1 ) {
         console.log('entered inside non match area');
      return  employees;
     }

if (employees && employees.length){
return employees.filter(employee =>{
if (searchTerm && employee.fullName.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1){
return false;
}
if (searchTerm1 && employee.address.toLowerCase().indexOf(searchTerm1.toLowerCase()) === -1){
return false;
}
return true;
})
}
else{
return employees;
}

}
}
