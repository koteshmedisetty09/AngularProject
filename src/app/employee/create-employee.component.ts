import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder,Validators, FormArray} from '@angular/forms';
import { EmployeeService } from './employee.service';
import { IEmployee } from './IEmployee';
import { ISkill } from './ISkill';
import { CustomValidators } from '../shared/custom.validators';
import {IDepartment } from "./IDepartment"

import { Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { ILocation } from './ILocation';
//import { link } from 'fs';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  employee: IEmployee;
  pageTitle: string;
  selectedFile= null;
  error: string;
  userId: number = 1;
  //uploadResponse = { status: '', message: '', filePath: '' };

  previewPhoto = false; 


  onFileSelected(event){
this.selectedFile=event.target.files[0].name;
    console.log(this.selectedFile);
  }
  onUpload(){


  }

  departments: IDepartment[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ]; 
  

  optionSelected:string;

  locations: ILocation[] = [
    { id:1, name: 'HYD' },
    {id:2, name: 'CHN' },
    {id:3,  name: 'RJY' },
    {id:4,  name: 'BNG' }
  ];
 

  validationMessages = { 
    'fullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 10 characters.'
    },
    'email': {
      'required': 'Email is required.',
      'emailDomain': 'Email domian should be dell.com'
    },

    'phone': {
      'required': 'phone is required.'
    },
    'skillName': {
      'required': 'Skill Name is required.',
    },
    'experienceInYears': {
      'required': 'Experience is required.',
    },
    'proficiency': {
      'required': 'Proficiency is required.',
    },
  };
  formErrors = {
    'fullName': '',
    'email': '',
    'phone':'',
    'skillName': '',
    'experienceInYears': '',
    'proficiency': ''
  };
  
  


 constructor(private fb: FormBuilder,
  private route: ActivatedRoute,
  private employeeService: EmployeeService,
  private router:Router) { }



  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  } 



 ngOnInit() {
  this.employeeForm = this.fb.group({
    fullName: ['', [Validators.required,
    Validators.minLength(2), Validators.maxLength(10)]],
    dateOfBirth:[''],

    contactPreference:['email'],
    email: ['', [Validators.required,CustomValidators.emailDomain('dell.com')]],
    phone: [''],
    department:[''],

    address:[''],
  location:['CHN'],

    //  location: this.fb.array([

    //    this.addLocFormGroup()
    //   ]),
    
    



    skills: this.fb.array([

      this.addSkillFormGroup()
    ]),
    photoPath: ['']
  });

  this.employeeForm.get('contactPreference')
  .valueChanges.subscribe((data: string) => {
this.onContactPrefernceChange(data);
});

  this.employeeForm.get('fullName').valueChanges.subscribe(
    value => {
      console.log(value);
    }
  );

  this.employeeForm.valueChanges.subscribe((data) => {
    this.logValidationErrors(this.employeeForm);
  });

//it is belong to edit

this.route.paramMap.subscribe(params => {
  const empId = +params.get('id');
  if (empId) {
    this.pageTitle = 'Edit Employee';

    this.getEmployee(empId);
  }else{
    this.pageTitle = 'Create Employee';

    this.employee = {
      id: null,
      fullName: '',
      dateOfBirth:'',
      contactPreference: '',
      email: '',
      phone: null,
      department:null,

      address: '',
      location:[],
      skills: [],
      photoPath:null
    };
  }
});

  

}//end of init





getEmployee(id: number) {
  this.employeeService.getEmployee(id)
    .subscribe(
      (employee: IEmployee) => {
        
        this.editEmployee(employee);
        this.employee = employee;
        
      },
      (err: any) => console.log(err)
    );
}

editEmployee(employee: IEmployee) {
  this.employeeForm.patchValue({
    fullName: employee.fullName,
    dateOfBirth: employee.dateOfBirth,
    contactPreference: employee.contactPreference,
    email: employee.email,
    
    phone: employee.phone,
    address:employee.address,
    location:employee.location,
    photoPath: employee.photoPath
  });

//FOR EDIT
this.employeeForm.setControl('skills', this.setExistingSkills(employee.skills));

//this.employeeForm.setControl('location', this.setExistingLoc(employee.location));

}
//FOR EDITING SKILL

setExistingSkills(skillSets: ISkill[]): FormArray {
  const formArray = new FormArray([]);
  skillSets.forEach(s => {
    formArray.push(this.fb.group({
      skillName: s.skillName,
      experienceInYears: s.experienceInYears,
      proficiency: s.proficiency
    }));
  });

  return formArray;
}




addSkillButtonClick(): void {
  (<FormArray>this.employeeForm.get('skills')).push(this.addSkillFormGroup());//pushing new form group into this form array
}

removeSkillButtonClick(skillGroupIndex: number): void {
const skillsFormArray= (<FormArray>this.employeeForm.get('skills'));
skillsFormArray.removeAt(skillGroupIndex);
skillsFormArray.markAsDirty();
skillsFormArray.markAsTouched();

}
   addLocFormGroup(): FormGroup {
     return this.fb.group({

    name: ['']
    
  });
 }


addSkillFormGroup(): FormGroup {
  return this.fb.group({
    skillName: ['', Validators.required],
    experienceInYears: ['', Validators.required],
    proficiency: ['', Validators.required]
  });
}



onContactPrefernceChange(selectedValue: string) {
  const phoneFormControl = this.employeeForm.get('phone');
  if (selectedValue === 'phone') {
    phoneFormControl.setValidators(Validators.required);
  } else {
    phoneFormControl.clearValidators();
  }
  phoneFormControl.updateValueAndValidity();
}

logValidationErrors(group: FormGroup =this.employeeForm): void {
 
  Object.keys(group.controls).forEach((key: string) => {
    
    const abstractControl = group.get(key);
   
    if (abstractControl instanceof FormGroup) {
      this.logValidationErrors(abstractControl);
     
    } else {
      
      this.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty))   {
       
        const messages = this.validationMessages[key];
       
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }


      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
  
      
      if (abstractControl instanceof FormArray) {
        for (const control of abstractControl.controls) {
          if (control instanceof FormGroup) {
            this.logValidationErrors(control);
          }
        }
      }

    }
  });
}




onLoadDataClick(): void {
  //this.logValidationErrors(this.employeeForm);
  //console.log(this.formErrors);

 
  const formArray1 = this.fb.array([
    new FormControl('John', Validators.required),
    new FormControl('IT', Validators.required),
    new FormControl('Male', Validators.required),
  ]);

  const FormGroup = this.fb.group([
    new FormControl('John', Validators.required),
    new FormControl('IT', Validators.required),
    new FormControl('Male', Validators.required),
  ]);

console.log(formArray1);
console.log(FormGroup);

   

}



 onFileChange(event:any) {
   console.log('66666');
  if (event.target.files.length > 0) {
     const file = event.target.files[0];
    this.employeeForm.get('avatar').setValue(file);
  }
 }



 public fileEvent($event) {
  console.log('entered in event');
  const fileSelected: File = $event.target.files[0];

  this.employeeService.uploadFile(fileSelected).subscribe(
    () => this.router.navigate(['employees']),
    (err: any) => console.log(err)
  );
 
}











onSubmit(): void {
  debugger;
  this.mapFormValuesToEmployeeModel();
 console.log(this.optionSelected); 

 const formData = new FormData();
  


  if (this.employee.id) {
    this.employeeService.updateEmployee(this.employee).subscribe(
      () => this.router.navigate(['employees']),
      (err: any) => console.log(err)
    );

    

  } else {
    console.log(this.employee.address);
    console.log(this.employee.location);
    console.log(this.employee.photoPath);

    this.employeeService.addEmployee(this.employee).subscribe(
      () => this.router.navigate(['employees']),
      (err: any) => console.log(err)
    );

   /* this.employeeService.upload(formData, this.employee).subscribe(


    
      () => this.router.navigate(['employees']),
      (err: any) => console.log(err)
   );  */
  }

 


  

}





mapFormValuesToEmployeeModel() {
  this.employee.fullName = this.employeeForm.value.fullName;
  this.employee.dateOfBirth = this.employeeForm.value.dateOfBirth;
  this.employee.contactPreference = this.employeeForm.value.contactPreference;
  this.employee.email = this.employeeForm.value.email;
  this.employee.phone = this.employeeForm.value.phone;
  this.employee.department = this.employeeForm.value.department;

  this.employee.address = this.employeeForm.value.address;

  this.employee.location = this.employeeForm.value.location;
  
  this.employee.skills = this.employeeForm.value.skills;
  console.log('dear');

  console.log( this.employee.department);
  

  this.employee.photoPath = this.employeeForm.value.photoPath;
  
  console.log('maaping done');
}



}



