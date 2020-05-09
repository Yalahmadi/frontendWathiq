import { Component, OnInit } from '@angular/core';
import{Users} from '../model/Users';
import {UsereSrvice}from'../service/user.service';
import {Authority}from '../authority/authority';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: Users = {
    userId: 0,
    fullName: null,
    nationalID: null,
    email: null,
    phoneNumber: null,
    password: null,
    dob: null,
    enabled: 1,
    authName: new Authority(1, "ROLES_ADMIN"),
  }

  constructor( private userService: UsereSrvice) { }

  ngOnInit(): void {
  }
  
  addUser(): void {
    this.userService.addUser(this.user).subscribe(
      res => {
        location.reload();
      }
    )
  }

}

