import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-btn',
  imports: [],
  templateUrl: './btn.html',
  styleUrl: './btn.scss'
})
export class Btn {
  text = input('button')

  btnClicked = output()
  onBtnClicked() {
    this.btnClicked.emit()
  }
}
