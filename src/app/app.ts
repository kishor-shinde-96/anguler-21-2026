import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet,CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('anguler-tutorial-2026');

  lname = "kishor"
  uName = "KISHOR"


  today = new Date();

  amount = 500;

  per =0.35;

  user = {
    name: "kishor",
    age: 25,
    gender: "male",
    address: {
      city: "delhi",
      country: "india"
    }
  };
 
}
