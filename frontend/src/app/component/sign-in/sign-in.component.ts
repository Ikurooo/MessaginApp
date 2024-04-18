import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SigninComponent {
  email: string | null = null;
  password: string | null = null;
  errorMessage: string | null = null;

  constructor() {}

  signIn() {
    // Here you can add your authentication logic.
    // For this basic example, let's just check if email and password are filled.
    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    // Clear any previous error message
    this.errorMessage = null;

    // Here you would typically make an HTTP request to your backend to authenticate the user.
    // Upon successful authentication, you can redirect the user to another page.
    // For this example, we'll just log the user in the console.
    console.log('User signed in with email:', this.email);
  }
}
