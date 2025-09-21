import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { FoodService } from '../../../../services/foods';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-draw-history',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports:[RouterLink],
  templateUrl: './draw-history.html',
  styleUrl: './draw-history.scss'
})
export class drawHistory {
  foodService = inject(FoodService)

  autoplayConfig = {
    delay: 0,
    disableOnInteraction: false,
  };

}
