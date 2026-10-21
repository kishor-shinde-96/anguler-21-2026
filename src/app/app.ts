import { Component, effect, signal } from '@angular/core';
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

  // constructor() {
  //    effect(() => {
  //      console.log('count', this.count());
  //   });

  // }

  // increment() {
  //   this.count.update((c) => c + 1);
  // } 

  isDarkMode = signal(false);


  // constructor() {
  //   effect(() => {
  //     if (this.isDarkMode()) {
  //       document.body.style.backgroundColor = 'red';
  //       document.body.style.color = 'white';
  //     }else{
  //       document.body.style.backgroundColor = 'white';
  //       document.body.style.color = 'black';
  //     }
  //   });
  // }

  // toggle() {
  //   this.isDarkMode.update((c) => !c);
  // }


  message = signal('');

  constructor() {
    effect(() => {
      if(this.message()){
        setTimeout(() => {
          this.message.set('');
          console.log('cleared');
        },1000);
      }
    });
  }


  showMessage(){
    this.message.set('hello this is temp message');
  }
}
