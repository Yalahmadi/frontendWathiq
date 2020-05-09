import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserListComponent } from './user-list/user-list.component';



const routes: Routes = [
{path:"login",component:LoginComponent},
{path:"home-page",component:HomePageComponent},
{path:"signup",component:SignupComponent},
{path:"aboutus",component:AboutusComponent},
{path:"contactus", component:ContactusComponent},
{ path: "user-list",component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent , HomePageComponent , SignupComponent ,
   AboutusComponent , ContactusComponent , UserListComponent] 