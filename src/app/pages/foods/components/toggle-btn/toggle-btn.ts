import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-toggle-btn',
  imports: [CommonModule],
  templateUrl: './toggle-btn.html',
  styleUrl: './toggle-btn.scss',
})
export class ToggleBtn {
  isPicked = model(false);

  toggle() {
    this.isPicked.update((f) => !f);
  }
}
