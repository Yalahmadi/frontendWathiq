import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = false;
  constructor(private formBuilder: FormBuilder, private authService :AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });


    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get form() {
     return this.loginForm.controls; 
    }
 
handleTheLogin(){
  this.authService.signIn(this.form.email.value, this.form.password.value).subscribe(
    result => {
      this.router.navigate([this.returnUrl]);
      this.router.navigate(['/homepage'])
      alert("login successfully")
     
    }, 
    error => {
      this.error = true;
      alert("error ")
    }
  )
}
}


