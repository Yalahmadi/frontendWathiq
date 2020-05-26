import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Organization}from '../model/organization';

@Injectable({
    providedIn: 'root'
  })
  export class OrganizationService {

    private AddOrgUrl="http://localhost:8080/Users/AddOrga";


    constructor( private http:HttpClient){}

    AddOrganization(organization:Organization): Observable<Organization>{
        return this.http.post<Organization>(this.AddOrgUrl , organization);



    }



  }