import { Component, inject, signal } from '@angular/core';
import { User } from './user';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('anguler-tutorial-2026');

  userService = inject(User);

  users: any= toSignal(this.userService.getUsers());
}
