import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-btn',
  imports: [RouterLink],
  templateUrl: './btn.html',
  styleUrl: './btn.scss'
})
export class Btn {
  routerLink = input('')

  btnClicked = output()
  onBtnClicked() {
    this.btnClicked.emit()
  }
}
