import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormField, form } from '@angular/forms/signals';

@Component({
  imports: [CommonModule, FormField],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('anguler-tutorial-2026');

  loginModel = signal({
    email: '',
    password: ''
  });

  loginForm = form(this.loginModel);

  submit() {

    console.log(this.loginModel());
  }
 
}
