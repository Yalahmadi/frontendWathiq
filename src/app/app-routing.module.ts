import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HomepageComponent}from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserListComponent } from './user-list/user-list.component';
import {AuthGuard}from './authentication/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { UploadCertifcateComponent } from './upload-certifcate/upload-certifcate.component';


const routes: Routes = [
{path:"login",component:LoginComponent},
{path:"signup",component:SignupComponent},
{path:"homepage",component:HomepageComponent,canActivate:[AuthGuard]},
{path:"aboutus",component:AboutusComponent},
{path:"contactus", component:ContactusComponent},
{path: "user-list",component:UserListComponent,canActivate:[AuthGuard]},
{path:"profile",component:ProfileComponent,canActivate:[AuthGuard]},
{path:"logout",component:LogoutComponent,canActivate:[AuthGuard]},
{path:"upload-certificate",component:UploadCertifcateComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent ,HomepageComponent, SignupComponent,
     AboutusComponent , ContactusComponent , UserListComponent , ProfileComponent, 
     UploadCertifcateComponent] 