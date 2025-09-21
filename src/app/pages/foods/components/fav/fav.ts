import { NgClass } from '@angular/common';
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-fav',
  imports: [NgClass],
  templateUrl: './fav.html',
  styleUrl: './fav.scss'
})
export class Fav {
  isFav = model<boolean>()

  toggleFav() {
    this.isFav.update(flag => !flag);
  }
}
