import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Users } from '../model/Users'; 
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  Auth_server= "http://localhost:8080/users/addInd";
  LoginURL = "http://localhost:8080/Users/GetAllUsers";

  authSubject  =  new  BehaviorSubject(false);
private currentUserSubject: BehaviorSubject<Users>;
public currentUser: Observable<Users>;

  constructor(private http: HttpClient) {
  }

  signIn(email: string, password: string){
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa(`${email}:${password}`));

     return this.http.get<any>(this.LoginURL, {headers: headers}).pipe(
      map(user => {

        if (user) {
          user.authdata = btoa(`${email}:${password}`);
          localStorage.setItem('currentUser', JSON.stringify(user));
          user = JSON.parse(localStorage.getItem('currentUser'));
        }
        return user;
      })
    );
  }


  login(email:string, password:string) {
    return this.http.post<{access_token: string}>('http://localhost:8080/Users/GetAllUsers', {email, password}).pipe(tap(res => {
    localStorage.setItem('access_token', res.access_token);
}))
}

public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}
  isAuthenticated() {
    if (JSON.parse(localStorage.getItem('currentUser')))
      return true;
  }
  

logout(){
localStorage.removeItem('currentUser');
}


}





