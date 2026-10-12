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
  count = 0;

  handleClick() { 
    let abc= "Hi There";
    console.log('Button clicked!', abc, this.count);
    this.helloWorld();
  }

  helloWorld() {
    console.log('Hello, World!');
  }
}
