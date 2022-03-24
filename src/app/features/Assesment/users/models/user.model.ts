import { Department } from "src/app/features/employee/model/employee.model"

export interface Offices{
    id: number,
    name: string
}

export interface ClientName{
    id: number,
    name: string
}

export interface UserDetails{
    id:number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNo: number,
    clientName:string,
    office:string,
    department: number,
    gender: string
}