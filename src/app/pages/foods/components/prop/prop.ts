import { CommonModule } from '@angular/common';
import { Component, inject, input, model, OnInit, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FoodService } from '../../../../services/foods';

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
  // 此元件有表單/非表單兩種使用情況
  foodService = inject(FoodService);
  title = input('屬性');
  iconClass = input('');
  selectdNum = signal(0);
  maxNum = 5;
  numArr: number[] = Array.from({ length: this.maxNum }, (_, i) => i);

  // 區分情況
  mode = input('form');

  // 非表單傳入
  name = input('');
  initValue = input(0);

  ngOnInit() {
     // 非表單，傳入初始值
    this.selectdNum.set(this.initValue());
  }

  changeNum(newNum: number) {
    this.selectdNum.set(newNum);
    this.onChange(newNum);
    this.onTouched();

    // 非表單
    if (this.mode() === 'standalone' && this.foodService.currId()) {
      this.foodService.update(this.foodService.currId(), {
        [this.name()]: this.selectdNum(),
      });
    }
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
