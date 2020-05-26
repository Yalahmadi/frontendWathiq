import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthenticationService}from '../authentication/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private authService:AuthenticationService , private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
  }


  isLogged() {
    if (this.authService.isAuthenticated()) {
      return true;
    }
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    alert("log out succsefully :)")
  }
}

