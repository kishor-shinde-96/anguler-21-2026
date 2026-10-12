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
  name = "pune";


  counter: number = 0;

  // increment() {
  //   this.counter++;
  // }

  // decrement() {
  //   if (this.counter > 0) {
  //   this.counter--;
  //   }
  // }

  // reset() {
  //   this.counter = 0;
  // }


  handle(value: string) {
    if (value === 'increment') {
      this.counter++;
    } else if (value === 'decrement') {
      if (this.counter > 0) {
        this.counter--;
      }
    } else if (value === 'reset') {
      this.counter = 0;
    }
  }
} 
