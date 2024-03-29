import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule, MatToolbarModule, MatTableModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { UserManagerComponent } from './admin/user-manager/user-manager.component';
import { LoginComponent } from './common/login/login.component';
import { BandmanagerComponent } from './secured/bandmanager/bandmanager.component';
import { ProfilemanagerComponent } from './secured/profilemanager/profilemanager.component';
import { LogoutComponent } from './common/logout/logout.component';
import { SignupComponent } from './common/signup/signup.component';
import { ToolbarComponent } from './common/toolbar/toolbar.component';
import { FindComponent } from './public/find/find.component';
import { CalendarComponent } from './secured/calendar/calendar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UserManagerComponent,
    LoginComponent,
    BandmanagerComponent,
    ProfilemanagerComponent,
    LogoutComponent,
    SignupComponent,
    ToolbarComponent,
    FindComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule,
    MatMomentDateModule,
    MatDatepickerModule
  ],
  exports: [
    MatButtonModule
  ],
  providers: [
    HttpClient,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
