import { Component, OnInit } from '@angular/core';
import {Users} from '../model/Users';
import { UsereSrvice } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    user:Users[];

  constructor( private userservice : UsereSrvice) { }

  ngOnInit(): void {
   this.getAllUsers();

  }

getAllUsers(){
 this.userservice.getAllUsers().subscribe(

    result=>{
      this.user=result;
      console.log("successfully");
      alert("successfully")
    },
      
      err=>{(
        alert("Error")
      )
      }
      
      
      )
 }

 deleteUser(user: Users) {
  this.userservice.deleteUser(user.userId).subscribe(
    result => {
      let index = this.user.indexOf(user);
      this.user.splice(index, 1);
    }
  )
}
 }
