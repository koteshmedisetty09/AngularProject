import { ISkill } from './ISkill';
import { ILocation } from 'selenium-webdriver';
import {IDepartment } from "./IDepartment"
export interface IEmployee {
    id: number;
    fullName: string;
    dateOfBirth:string;
    email: string;
    phone?: number;
    contactPreference: string;
    address: string;
    department:IDepartment[];
    location:ILocation[];
    

    skills: ISkill[];
    photoPath?:string;
}
