import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule} from "@angular/forms";
import { UsereSrvice } from './service/user.service';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AboutusComponent,
    ContactusComponent,
    NavbarComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ UsereSrvice ],
  bootstrap: [AppComponent]
})
export class AppModule { }
