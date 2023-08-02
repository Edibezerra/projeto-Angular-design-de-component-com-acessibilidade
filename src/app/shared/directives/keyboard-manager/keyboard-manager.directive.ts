import { ContentChildren, Directive, HostListener, QueryList } from '@angular/core';
import { keyboardManagedItemDirective } from './keyboard-managed-item.directive';


@Directive({
  selector: '[appKm]'
})
export class KeyboardManagerDirective {

  @ContentChildren(keyboardManagedItemDirective) public items: QueryList<keyboardManagedItemDirective> =null

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log(this.items);
        console.log('up');
        break;
      case 'ArrowDown':
        console.log('down');
        break;
      case 'ArrowLeft':
        console.log('left');
        break;
      case 'ArrowRight':
        console.log('right');
        break;
    }
  }
}
