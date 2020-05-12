import { Component, OnInit } from '@angular/core';
import{Users} from '../model/Users';
import {UsereSrvice}from'../service/user.service';
import {Authority}from '../authority/authority';
import { RouterLink, ROUTES, Router } from '@angular/router';
import { HttpClient }from '@angular/common/http'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

user:UsersViewModel = {
    
  userID:null,
  fullName:'',
  dob:'',
  phoneNumber:'',
  email: null,
  nationalID: '',
  password:'',
}
  constructor( private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  }

  AddUser():void{
    let url = "http://localhost:8080/Users/AddInd";
    this.http.post(url ,this.user).subscribe(

      res=>{
        alert("WORKING");
      },
      err=>{
        alert("not working ")
      }

    )
   
  }

}

export interface UsersViewModel {
  userID:number;
  fullName:string;
  dob:string;
  phoneNumber:string;
  email: number;
  nationalID: string;
  password:string;
 
}







