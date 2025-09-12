import { Component, HostListener, output } from '@angular/core';
import { Btn } from "../btn/btn";
import { Card } from "../card/card";

@Component({
  selector: 'app-today-special',
  imports: [Btn, Card],
  templateUrl: './today-special.html',
  styleUrl: './today-special.scss'
})
export class TodaySpecial {
  btnClicked = output()
  onBtnClicked() {
    this.btnClicked.emit()
  }

  x = 100;
  y = 100;
  dragging = false;
  offsetX = 0;
  offsetY = 0;

  startDrag(event: MouseEvent) {
    this.dragging = true;
    this.offsetX = event.clientX - this.x;
    this.offsetY = event.clientY - this.y;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.dragging) {
      this.x = event.clientX - this.offsetX;
      this.y = event.clientY - this.offsetY;
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (this.dragging) {
      this.dragging = false;
      if (this.x < 0) {
        // 拖到畫面左邊就丟掉
        this.x = -1000; // 或直接用 flag 隱藏
      } else {
        // 不夠遠就回原位
        this.x = 100;
        this.y = 100;
      }
    }
  }
}
