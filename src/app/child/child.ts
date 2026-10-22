import { Component, input, EventEmitter, Output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  // name= input<string>();

  //  @Output() notify = new EventEmitter<string>();

  //   sendToParent() {
  //    this.notify.emit('Hello from child'); 
  //   }


  message = signal('Hello parent (signal from child)');

  updateMessage() {
    this.message.set('updated message from child component');
  }
}
