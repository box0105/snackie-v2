import { Component, inject, model, signal } from '@angular/core';
import { FoodService } from '../../services/foods';
import { Nav } from '../../components/nav/nav';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToggleBtn } from "./components/toggle-btn/toggle-btn";
import { FilterFoodsPipe } from "../../pipes/filter-foods-pipe";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foods',
  imports: [Nav, RouterModule, FormsModule, ToggleBtn, FilterFoodsPipe, CommonModule],
  templateUrl: './foods.html',
  styleUrl: './foods.scss',
})
export class foods {
  foodService = inject(FoodService);
}
