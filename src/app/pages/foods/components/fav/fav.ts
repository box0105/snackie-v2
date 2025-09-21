import { NgClass } from '@angular/common';
import { Component, forwardRef, input, model, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  initIsFav = input(false);
  value = false;
  private initializedFromForm = false;
  private onChange: (val: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit() {
    if (!this.initializedFromForm) {
      this.value = this.initIsFav();
    }
  }

  toggle() {
    this.value = !this.value;
    this.onChange(this.value);
    this.onTouched();
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
