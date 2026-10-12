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

  value = 10;
 // value = "Hello, World!"

 namer: string = "kishor shinde";

 age: number = 26;
 isValid: boolean = true;

 handleClick() {
   let value;
   value = "hello, world!";
   value = 10
   console.log(value);

 }
  sum(a: number, b: number) {
    console.log(a + b);
    console.log(a + b);
  }
}
