import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


interface User {
  name: string;
  age: number;
}

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('anguler-tutorial-2026');
 // name = "pune";


  count = signal<number>(0);

  name = signal<string>('Kishor Shinde');

  number= signal<number[]>([1,20,36,41,56]);

  user = signal<User>({
    name: 'Kishor',
    age: 30
    });

    addNumber() {
      this.number.update((current) => [...current, 10]);
    }


}
