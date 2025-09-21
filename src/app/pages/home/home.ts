import { Component, inject, signal } from '@angular/core';
import { Header } from '../../components/header/header';
import { Btn } from '../../components/btn/btn';
import { FoodService } from '../../services/foods';
import { Router } from '@angular/router';
import { drawHistory } from './components/draw-history/draw-history';
import { Nav } from "../../components/nav/nav";

@Component({
  selector: 'app-home',
  imports: [Header, drawHistory, Btn, Nav],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  router = inject(Router);
  foodService = inject(FoodService);

  goToFood() {
    this.foodService.draw();
    this.router.navigate(['/foods', this.foodService.currId()]);
  }
}
