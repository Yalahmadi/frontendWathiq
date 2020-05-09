import {Authority} from '../authority/authority';
export class Users {
    userId: number;
    fullName: string;
    nationalID: string;
    email: string;
    phoneNumber:string
    password: string;
    dob: Date;
    enabled: number;
    authdata?: string;
    authName: Authority;
}
