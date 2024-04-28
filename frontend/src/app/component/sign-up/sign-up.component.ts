import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup | undefined;
  errorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  signUp(): void {
    if (!this.signUpForm) {
      this.errorMessage = "Application Error: Form not initialized.";
      return;
    }

    const username = this.signUpForm.value.username;
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;

    if (this.signUpForm.valid) {

    } else {
      this.errorMessage = '';
      const usernameControl = this.signUpForm.get('username');
      const emailControl = this.signUpForm.get('email');
      const passwordControl = this.signUpForm.get('password');

      if (usernameControl && usernameControl.errors && usernameControl.errors.required) {
        this.errorMessage += 'Username is required. ';
      }

      if (emailControl && emailControl.errors) {
        if (emailControl.errors.required) {
          this.errorMessage += 'Email is required. ';
        }
        if (emailControl.errors.email) {
          this.errorMessage += 'Invalid email format. (example@gmail.com)';
        }
      }

      if (passwordControl && passwordControl.errors && passwordControl.errors.required) {
        this.errorMessage += 'Password is required. (Must be at least 6 characters.)';
      }
    }
  }

}
