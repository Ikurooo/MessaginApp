import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignupComponent {
  username: string | null = null;
  email: string | null = null;
  password: string | null = null;
  errorMessage: string | null = null;

  constructor() {}

  signUp() {
    // Here you can add your signup logic.
    // For this basic example, let's just log the signup details.
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // You can add further validation and backend API calls here.
  }
}
