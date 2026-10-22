import { Component, signal } from '@angular/core';
import { UserStore } from './core/store/user';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('anguler-tutorial-2026');

// constructor(public counterStore: CounterStore) {}
   constructor(public userStore: UserStore) {}
}
