import { Component, computed, effect, signal } from '@angular/core';
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

  // name = signal('Angular');

  // setCount(){
  //   this.count.set(2);
  // }


  count = signal(2);
  price = signal(100);

  total = computed(() => this.count() * this.price());

  constructor() {
    effect(() => {
      console.log("Double Count", this.total());
    });

  }

  udatedCount(){
    this.count.update(count => count + 1);
  }

  updatedPrice(){
    this.price.update(price => price + 1);
  }

 
}
