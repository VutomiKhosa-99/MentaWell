
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  formData: any = {}; // Object to store form data
  loginSuccess: boolean = false;
  loginError: string | null = null;

  constructor( private authService:AuthService , public router: Router) { }

  
  onSubmit() {
    
    const { email, password } = this.formData;
    this.authService.loginUser(email, password).subscribe(
      (response) => {
        this.loginSuccess = true;
        this.loginError = null;
        // Handle successful login, e.g., redirect to the user dashboard
        console.log(this.formData,"fgcgvhvgvgvyvhv")
         // Store the token securely (e.g., in local storage)
        //  localStorage.setItem('token', response.token);
         alert("login success")
        //  this.router.navigate(['/trackorder']);
         
         
      },
      (error) => {
        this.loginSuccess = false;
        this.loginError = 'Login failed. Please check your credentials.';
        // alert("Login failed. Please check your credentials")
      }
    );

    
  }
}
