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
  

  handleClick() {
    console.log('Button clicked!');
  }


  handleInput(event: any) {
  
    console.log('Input value:', event.target.value);
  }

  handleKeyup(event: any) {
    console.log('Key pressed:', event.key);
  }

  handleMouseEnter() {
    console.log('Mouse entered the element!');
  }

  handleMouseLeave() {
    console.log('Mouse left the element!');
  }

}
