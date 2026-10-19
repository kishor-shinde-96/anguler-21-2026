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

  items = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular'];

  users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 },
  ];


  items1 =['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  removeFruit(i: number) {
    this.items1.splice(i, 1);
  }

  number = [10,31,18,25,40,50,46,76,90,100];
}
