import { Component, OnInit } from '@angular/core';
import{Users} from '../model/Users';
import {UsereSrvice}from'../service/user.service';
import {Authority}from '../authority/authority';
import { RouterLink, ROUTES, Router } from '@angular/router';
import { HttpClient }from '@angular/common/http';
import{OrganizationService} from '../service/organizationService';
import{Organization} from '../model/organization';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


constructor(private userservice : UsereSrvice,
    private router: Router ,private http:HttpClient , private organizationService:OrganizationService,) { }
  showMe=true;
  showMeNot=false;

  orgForm(){
    this.showMe=false
    this.showMeNot=true
  }

  userForm(){
    this.showMeNot=false;
    this.showMe=true;
  }


user:Users = {
    
  userId:0,
  fullName:null,
  dob:null,
  phoneNumber:null,
  email: null,
  nationalID:null,
  password:null,
  enabled: 1,
  authName: new Authority(2,"ROLE_USER"),
  userOrga: null,
  
}
userOrg: Users = {
  userId:0,
  fullName:null,
  dob:new Date,
  phoneNumber:'0000',
  email: null,
  nationalID:'00000',
  password:null,
  enabled: 1,
  authName: new Authority(3,"ROLE_Org"),
  userOrga:null,
};

orga: Organization[];

  orgasignupForm = new FormGroup({
    fullName: new FormControl('', [Validators.required , Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email , Validators.minLength(5),Validators.maxLength(15)]),
    password: new FormControl('', [Validators.required , Validators.minLength(5), Validators.maxLength(20)])
  })

ngOnInit(){}

   // -----------------------------------
  addUser():void{
  this.userservice.addUser(this.user).subscribe(

      res=>{
        console.log("post completed!");
      
        this.router.navigate(['/login']);
      },  
       error=>{
         
        console.log("errorrrrrr");
        alert("error for ADD Ind")
       }
      
     
    )
  }

  //--------------------------------------------


    addOrg(){

      this.userservice.addUser(this.userOrg).subscribe(


          res=>{
        console.log("post completed");
        this.router.navigate(['/login']);


          },
          err=>{
              console.log("error happend");
              alert("error for Add Org");

          }
          

      )


    }
      
    


}









