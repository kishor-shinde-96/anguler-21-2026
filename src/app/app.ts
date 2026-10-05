import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/*
  Topics covered in this component:
  - Angular component basics
  - Component properties and state
  - String, number, and boolean data types
  - Template interpolation with {{ ... }}
  - Conditional expressions inside templates
  - Angular signals for reactive state
  - Calling methods from the template
*/

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // Example of simple string data displayed in the template
  name = 'Angular Tutorial';

  // Boolean values used for conditional template logic
  isAdmin = true;
  isLogin = true;

  // Number values used in template expressions and math
  count = 5;
  price = 199.99;

  // Signal example: reactive value that can be used in the template
  title = signal('Angular signal');

  // Method used in the template to return dynamic text
  getUser() {
    return 'Hi Kishor';
  }
}


