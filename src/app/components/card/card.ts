import { Component } from '@angular/core';
import { Prop } from "../prop/prop";
import { Fav } from "../fav/fav";

@Component({
  selector: 'app-card',
  imports: [Prop, Fav],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {

}
