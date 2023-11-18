import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formData: any = {}; // Object to store form data
  registrationSuccess: boolean = false;
  registrationError: string | null = null;
  constructor( public router: Router) {}

  // // registerUser(firstname: string, lastname: string, email: string, password :string ) {
  // onSubmit() {
  //   const { fullname, email, password } = this.formData;

  //   this.authService.register(fullname, email, password).subscribe(
  //       (response) => {
  //         // Handle successful registration, e.g., redirect to login page
  //         console.log(response);
  //         console.log('successfully registered');
  //         this.registrationSuccess = true;
  //         this.registrationError = null;
  //         alert("registration success")
  //         this.router.navigate(['/login']);
  //       },
  //       (error) => {
  //         // Handle registration error, e.g., display an error message
  //         console.log(error);
  //         this.registrationSuccess = false;
  //         this.registrationError =
  //           'Registration failed. Please try again later.';
  //           alert("Registration failed. Please try again later.")
  //       }
  //     );
  //     console.log(this.formData)
  //}
}