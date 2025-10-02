import { NgClass } from '@angular/common';
import { Component, forwardRef, inject, input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FoodService } from '../../../../services/foods';

@Component({
  selector: 'app-fav',
  imports: [NgClass],
  templateUrl: './fav.html',
  styleUrl: './fav.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Fav),
      multi: true,
    },
  ],
})
export class Fav implements ControlValueAccessor, OnInit {
  // 此元件有表單/非表單兩種使用情況
  foodService = inject(FoodService);
  value = false;

  // 區分情況
  mode = input('form');

  // 非表單時的 input
  initIsFav = input(false);

  // 表單
  private initializedFromForm = false;
  private onChange: (val: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit() {
    // 非表單，傳入初始值
    if (!this.initializedFromForm) this.value = this.initIsFav();
  }

  toggle() {
    this.value = !this.value;

    // 表單
    if (this.mode() === 'form') {
      this.onChange(this.value);
      this.onTouched();
    }

    // 非表單
    if (this.mode() === 'standalone' && this.foodService.currId()) {
      this.foodService.update(this.foodService.currId(), { isFav: this.value });
    }
  }

  // ControlValueAccessor 方法
  writeValue(obj: boolean): void {
    this.value = obj ?? false;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    this.initializedFromForm = true;
  }
}
