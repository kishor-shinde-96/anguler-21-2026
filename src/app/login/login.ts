import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67lzHIhzv1mGwjooqe1R6xt-4sHByljxVdSwdfMpWEw&s';
  isDisabled = false;
  username = 'Kishor';
  isActive = true;
  boxWidth = false;
  bGColor ="red";
  count = signal(0);
}
