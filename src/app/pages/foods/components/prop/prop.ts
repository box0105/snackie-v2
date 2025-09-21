import { CommonModule } from '@angular/common';
import { Component, input, model, OnInit, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-prop',
  imports: [CommonModule],
  templateUrl: './prop.html',
  styleUrl: './prop.scss',
  providers: [
    {
      // 告知 Prop 元件可以像 input 一樣，接受 formControlName 控制
      provide: NG_VALUE_ACCESSOR,
      useExisting: Prop,
      multi: true,
    },
  ],
})
export class Prop implements ControlValueAccessor, OnInit {
  title = input('屬性');
  iconClass = input('');
  initValue = input(0);
  selectdNum = signal(0);
  maxNum = 5;
  numArr: number[] = Array.from({ length: this.maxNum }, (_, i) => i);

  ngOnInit() {
    // initValue 用於非表單時引入
    this.selectdNum.set(this.initValue());
  }

  changeNum(newNum: number) {
    this.selectdNum.set(newNum);
    this.onChange(newNum);
    this.onTouched();
  }

  // ControlValueAccessor callbacks
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: number): void {
    this.selectdNum.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
