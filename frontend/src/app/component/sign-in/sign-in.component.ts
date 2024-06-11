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
    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    this.errorMessage = null;
    console.log('User signed in with email:', this.email);
  }
}
