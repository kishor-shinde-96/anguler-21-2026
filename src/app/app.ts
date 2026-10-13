import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('anguler-tutorial-2026');
  //name = "pune";
  name: string = '';

  city: string = '';

  email: string = '';

  updateName(value: string) {
    this.name = value;
  }

  getEmail(value: string) {
    this.email = value;
  }
}
