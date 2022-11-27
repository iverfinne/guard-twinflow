import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './users/users.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AuthGuard } from './auth.guard';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: '' , redirectTo:'/login', pathMatch:'full'},
  { path: 'login' , component: LoginComponent},
  { path: 'logout', component: LogoutComponent },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'demo', component: DemoComponent},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

} 