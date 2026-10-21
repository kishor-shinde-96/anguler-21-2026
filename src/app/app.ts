import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('anguler-tutorial-2026');

//username = 'kishor';

name = signal('kishor');


user = signal<{ name: string; age: number; }>({
  name: 'with username' ,
  age: 21

});

updateName(value: string) {
  this.user.update(user => ({ ...user, name: value }));

}

updateAge(value: number) {
  this.user.update(user => ({ ...user, age:user.age + 1 }));
}

 
}
