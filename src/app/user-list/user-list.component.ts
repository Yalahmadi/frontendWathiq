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
  // this.getAllUsers();

  }

//  getAllUsers(){
//   this.userservice.getAllUsers().subscribe(

//     result=>{
//       this.user=result;

//     })
 }

// }
