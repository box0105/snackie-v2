import { CommonModule } from '@angular/common';
import { Component, input, model, signal } from '@angular/core';

@Component({
  selector: 'app-prop',
  imports: [CommonModule],
  templateUrl: './prop.html',
  styleUrl: './prop.scss'
})
export class Prop {
  maxNum = signal(5)
  title = input('屬性')
  selectdNum = model(3)
  iconClass = input('');

  numArr: number[] = Array.from({ length: this.maxNum() }, (_, i) => i);
  changeNum(newNum: number) {
    this.selectdNum.set(newNum)
  }
}
