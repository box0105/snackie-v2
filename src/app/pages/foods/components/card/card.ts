import { Component, inject } from '@angular/core';
import { Prop } from '../prop/prop';
import { Fav } from '../fav/fav';
import { FoodService } from '../../../../services/foods';

@Component({
  selector: 'app-card',
  imports: [Prop, Fav],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  FoodService = inject(FoodService);
}
