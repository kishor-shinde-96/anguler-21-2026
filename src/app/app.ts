import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('anguler-tutorial-2026');
  newTodo = signal('');

  todos = signal<{ text: string, done: boolean }[]>([]);


  addTodo() {
    const text = this.newTodo().trim();

    if (text === '') {
      return;
    }
    this.todos.update(list => [...list, { text, done: false }]);
    this.newTodo.set('');
  }

  toggleTodo(index: number) {
    this.todos.update(list =>
      list.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  }

  removeTodo(index: number) {
    this.todos.update(list => list.filter((_, i) => i !== index));
  }
}
