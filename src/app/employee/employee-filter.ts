








import { PipeTransform, Pipe } from '@angular/core';
import { IEmployee } from './IEmployee';
@Pipe({
name: 'employeeFilter',
})

export class EmployeeFilterPipe implements PipeTransform {
transform(employees: IEmployee[], searchTerm: string,searchTerm1: string) {
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










/*

import { PipeTransform, Pipe } from '@angular/core';

import { IEmployee } from './IEmployee';


@Pipe({

name:'employeeFilter'



})



export class EmployeeFilterPipe implements PipeTransform {

transform(employees: IEmployee[], searchTerm: string,searchTerm1: string) {





employees.sort((a: any, b: any) => {

if (a < b) {

return -1;

} else if (a > b) {

return 1;

} else {

return 0;

}

});

return employees.sort((a: any, b: any) => {

if (a < b) {

return -1;

} else if (a > b) {

return 1;

} else {

return 0;

}

});

return employees;

};










}

*/











/*






import { PipeTransform, Pipe } from '@angular/core';
import { IEmployee } from './IEmployee';

@Pipe({
    name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {
   

    transform(employees: IEmployee[], searchTerm: string,searchTerm1: string,exactMatch: string): IEmployee[] {
       

      //  if (!employees && !searchTerm  || searchTerm1 ||exactMatch ) {
           // console.log('entered inside non match area');
        //   return employees;
       // }


if(searchTerm){
    console.log('Indvidual name box');
    return employees.filter(employee =>
        employee.fullName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1  )

}

if(searchTerm1){
    console.log('Indvidual address box');
    return employees.filter(employee =>
   employee.address.toLowerCase().indexOf(searchTerm1.toLowerCase() .match('searchTerm'))         )
     //   employee.address.toLowerCase().indexOf(searchTerm1.toLowerCase()) !== -1  )
}

   

      if(searchTerm){
            console.log('Searchtarea');

            return employees.filter(employee =>
                employee.fullName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1  )
                
                
                //employee.address.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1    ) 
            } 

if(exactMatch){
    console.log('exactmatcharea');
    return employees.filter(employee =>
        employee.address.toLowerCase().indexOf(searchTerm1.toLowerCase()) !== -1 )

}

        if(!searchTerm && !searchTerm1){
            console.log('No Match');
            return employees;
        } 
        
// else{

//     console.log('no match found');
//     alert('no match');
// }





    }




    
}

*/