import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http'
import{Users} from '../model/Users';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsereSrvice {


  // private AddIndUrl= "http://localhost:8080/Users/AddInd";
  // private GetAllUserUrl= "http://localhost:8080/Users/GetAllUsers";
  // private GetUserByIdUrl="http://localhost:8080/Users/GetUser/";
  // private DeleteUserUrl="http://localhost:8080/Users/DeleteUser/";
 

  // constructor(private http: HttpClient) { }


  // // getAllUsers() {
  // //   return this.http.get<Users[]>(this.GetAllUserUrl);
  // // };

  // // addUser(users): Observable<Users> {
  // //   return this.http.post<Users>(this.AddIndUrl, users);
  // // };

  // addUser(user: Users) {
  //   return this.http.post(this.AddIndUrl,user);
  // };

  // getAllUsers(): Observable<Users[]> {
  //   return this.http.get<Users[]>(this.GetAllUserUrl);

    
  // };

  // getUserByID(userID: number): Observable<Users> {
  //   return this.http.get<Users>(this.GetUserByIdUrl + userID)
  // };

  // deleteUser(userID: number): Observable<Users> {
  //   return this.http.delete<Users>(this.DeleteUserUrl + userID);
  // }

}




