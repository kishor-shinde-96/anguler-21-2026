import { Component, signal } from '@angular/core';
import { Button } from './button/button';

@Component({
  imports: [Button],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('anguler-tutorial-2026');

  // saveData() {
  //   console.log('save data');
  // }

  meessage = '';
  onSave(message: string) {
    console.log(message);
    this.meessage = message;
  }
 
}
