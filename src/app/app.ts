import { Component, signal } from '@angular/core';
import { Child } from './child/child';

@Component({
  imports: [Child],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('anguler-tutorial-2026');

  //username: string = 'Kishor Shinde';

  message: string = '';

  onMessage(message: string) {
    this.message = message;
  }

}
