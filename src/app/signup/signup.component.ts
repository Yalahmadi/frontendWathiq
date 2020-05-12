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

model:UsersViewModel = {
    
  userID:0,
  fullName:null,
  dob:null,
  phoneNumber:null,
  email: null,
  nationalID:null,
  password:null,
  
}
  constructor( private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  }

  AddUser():void{
    let url = "http://localhost:8080/Users/AddInd";
    this.http.post(url ,this.model , { responseType: 'text'}).subscribe(

      res=>{
        console.log("post completed!");
      
        this.router.navigate(['/login'])
      },
      err=>{(
        alert("Error")
      )
      }
    )
  }

}

export interface UsersViewModel {
  userID:number;
  fullName:string;
  dob:String,
  phoneNumber:string;
  email: number;
  nationalID: number;
  password:string;
  // enable:number;
 
}







