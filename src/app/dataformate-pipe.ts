import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataformate',
})
export class DataformatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
