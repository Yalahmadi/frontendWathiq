import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http'
import{Users} from '../model/Users';
import { Observable } from 'rxjs';

//import { url } from 'inspector';



@Injectable({
  providedIn: 'root'
})
export class UsereSrvice {


   private AddIndUrl= "http://localhost:8080/Users/AddInd";
   private GetAllUserUrl= "http://localhost:8080/Users/GetAllUsers";
   private GetUserByIdUrl="http://localhost:8080/Users/GetUser/";
   private DeleteUserUrl="http://localhost:8080/Users/DeleteUser/";
 

 constructor(private http: HttpClient) { }


 addUser(user :Users): Observable<Users> {
   return this.http.post<Users>(this.AddIndUrl, user)};

   getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.GetAllUserUrl)};

   getUserByID(userID: number): Observable<Users> {
     return this.http.get<Users>(this.GetUserByIdUrl + userID)};

   deleteUser(userID: number): Observable<Users> {
    return this.http.delete<Users>(this.DeleteUserUrl + userID)};


}
