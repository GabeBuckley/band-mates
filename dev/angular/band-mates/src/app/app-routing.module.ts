import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routed components
// for public section
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { LogoutComponent } from './common/logout/logout.component';
import { SignupComponent } from './common/signup/signup.component';
import { FindComponent } from './public/find/find.component';

// For secured section
import { BandmanagerComponent } from './secured/bandmanager/bandmanager.component';
import { ProfilemanagerComponent } from './secured/profilemanager/profilemanager.component';
import { CalendarComponent } from './secured/calendar/calendar.component';

// for admin section
import { UserManagerComponent } from './admin/user-manager/user-manager.component';



const routes: Routes = [
  // Public
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'find', component: FindComponent, data: { title: 'Find' } },
  { path: 'calendar', component: CalendarComponent, data: { title: 'Find' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignupComponent },

  // Secured
  { path: 'edit/band/:id', component: BandmanagerComponent, data: { title: 'Edit' } },
  { path: 'edit/profile', component: ProfilemanagerComponent, data: { title: 'Edit' } },


  // Admin
  { path: 'admin/users', component: UserManagerComponent, data: { title: 'User Management' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
