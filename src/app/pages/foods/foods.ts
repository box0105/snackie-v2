import { Component, inject, model, signal } from '@angular/core';
import { FoodService } from '../../services/foods';
import { Nav } from '../../components/nav/nav';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToggleBtn } from "./components/toggle-btn/toggle-btn";

@Component({
  selector: 'app-foods',
  imports: [Nav, RouterModule, FormsModule, ToggleBtn],
  templateUrl: './foods.html',
  styleUrl: './foods.scss',
})
export class foods {
  foodService = inject(FoodService);
}
