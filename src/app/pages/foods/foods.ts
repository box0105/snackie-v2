import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { FoodService } from '../../services/foods';
import { Nav } from '../../components/nav/nav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-foods',
  imports: [Header, Nav, RouterModule],
  templateUrl: './foods.html',
  styleUrl: './foods.scss',
})
export class foods {
  foodService = inject(FoodService);
}
