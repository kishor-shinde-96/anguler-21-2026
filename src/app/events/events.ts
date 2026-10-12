import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-events',
  styleUrl: './events.css',
  templateUrl: './events.html',
})
export class Events {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  showEvent(e: Event) {
    console.log(e);
  }

  username = ''; 
  updateUsername(value: string) {
    this.username = value;
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    console.log('Form submitted!');
  }
}