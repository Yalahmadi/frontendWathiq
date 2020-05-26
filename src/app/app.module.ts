import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { UsereSrvice } from './service/user.service';
import { RouterModule} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadCertifcateComponent } from './upload-certifcate/upload-certifcate.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AboutusComponent,
    ContactusComponent,
    NavbarComponent,
    UserListComponent,
    HomepageComponent,
    LogoutComponent,
    ProfileComponent,
    UploadCertifcateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
    
  ],
  providers: [ UsereSrvice ],
  bootstrap: [AppComponent]
})
export class AppModule { }
