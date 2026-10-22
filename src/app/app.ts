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

  // count = signal(0);
  // isLoggedIn = signal(false);

  // items = signal<string[]>([
  //   'Angular',
  //   'TypeScript',
  //   'RxJS',
  //   'Webpack',
  //   'Jest'
  // ]);


  // addItem() {
  //   this.items.update((items) => [...items, 'HTML']);
  // }

  role = signal<'admin' | 'user'>('user');

  features = signal<string[]>([
    'Dashboard',
    'Profile',
    'Settings'
  ]);

  makeAdmin() {
    this.role.set('admin');
    this.features.set([
      'Dashboard',
      'Profile',
      'Settings',
      'Admin Panel',
      'user management']);
  }

  makeUser() {
    this.role.set('user');
    this.features.set([
      'Dashboard',
      'Profile',
      'Settings']);
  }


}
