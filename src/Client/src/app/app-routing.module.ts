import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [

  // { path: 'register', component: RegisterComponent },
  {path : 'register' , component: RegisterComponent },

  //to make default home page
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path: 'login' , component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
