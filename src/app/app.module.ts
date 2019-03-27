import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { UserdashComponent } from './userdash/userdash.component';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { HeaderComponent } from './navigation/header/header.component';

import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HomepageComponent } from './welcome/homepage/homepage.component';
import { ProfileinfoComponent } from './userprofile/profileinfo/profileinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserdashComponent,
    HeaderComponent,
    SidenavListComponent,
    HomepageComponent,
    ProfileinfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
