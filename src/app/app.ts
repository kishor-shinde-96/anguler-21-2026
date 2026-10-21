import { Component, computed, signal } from '@angular/core';
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

  // count= signal<number>(2);

  // doubleCount = computed<number>(() => this.count() * 2);

  // tripleCount = computed<number>(() => this.count() * 3);

  // increment() {
  //   this.count.set(this.count() + 1);
  // }


  firstName = signal<string>('kishor');
  lastName = signal<string> ('shinde');

  price = signal<number[]>([10,39,57,59]);

  total = computed<number>(() => {
    return this.price().reduce((acc, curr) => acc + curr, 0);
  });

}
