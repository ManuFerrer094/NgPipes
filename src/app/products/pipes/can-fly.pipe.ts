import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): 'flies' | 'does not fly' {
    return value ? 'flies' : 'does not fly';
  }
}
