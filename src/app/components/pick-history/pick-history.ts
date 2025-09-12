import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-pick-history',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './pick-history.html',
  styleUrl: './pick-history.scss'
})
export class PickHistory {
  imgs = ['ramen.jpg', 'spaghetti.jpg', 'steak.jpeg', 'sushi.jpg']

  autoplayConfig = {
    delay: 0,           
    disableOnInteraction: false,
  };

}
