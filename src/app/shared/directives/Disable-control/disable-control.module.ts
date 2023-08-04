import { CommonModule } from '@angular/common';
import { Directive, NgModule, Input } from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';
import { DisableControlDirective } from './disable-control.directive';
@NgModule({
  declarations: [DisableControlDirective],
  imports: [CommonModule],
  exports: [DisableControlDirective]
})
export class DisableControlModule{

}
