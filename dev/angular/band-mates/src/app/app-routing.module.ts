import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routed components
// for public section
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './common/login/login.component';

// for admin section
import { UserManagerComponent } from './admin/user-manager/user-manager.component';


const routes: Routes = [
  // Public
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },

  // Admin
  { path: 'admin/users', component: UserManagerComponent, data: { title: 'User Management' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
