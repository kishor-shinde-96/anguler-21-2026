import { Component, signal } from '@angular/core';
import { FormField } from './form-field/form-field';
@Component({
  imports: [FormField],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('anguler-tutorial-2026');

  email = '';

  onEmailChange(value: string) {
    console.log('Email', value);

    this.email = value;
  }
 
}
