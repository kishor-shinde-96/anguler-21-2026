import { Component, signal } from '@angular/core';
import { PipeShortNamePipe } from './pipe/pipe-short-name-pipe';
import { ConvertPipe } from './pipe/convert-pipe';
import { CommonModule } from '@angular/common';

@Component({
  imports: [ PipeShortNamePipe,ConvertPipe,CommonModule ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('anguler-tutorial-2026');

  fullName = 'Shrre Shinde';

  usd = 10;
  usdToInr = 96;
 
}
