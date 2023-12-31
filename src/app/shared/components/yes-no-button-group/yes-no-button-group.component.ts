
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { YesNoButtonGroupModule } from './yes-no-button-group.module';
import { Component, OnInit,Input, Output, EventEmitter, forwardRef } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef (() => YesNoButtonGroupComponent)
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input() disabled = false;
  @Input() public value: string = null;
  @Input() public label = "";
  @Output() public valueChange = new EventEmitter<string>();
  public id: string = null;
  public options = YesNoButtonGroupOptions;
  public onChange = (value: string) =>{};
  public onTouched = () => {};

  constructor() {
    this.id = `yes-no-button-group-${uuid.v1()}`;
  }

  ngOnInit(): void {
  }

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
   this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public activate(value: string):void{
    this.writeValue(value);
        this.valueChange.emit(this.value);
  }
}
enum YesNoButtonGroupOptions{
  YES = 'yes',
  NO = 'no'
}
