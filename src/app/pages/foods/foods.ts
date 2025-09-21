import { Component, inject } from '@angular/core';
import { FoodService } from '../../services/foods';
import { Nav } from '../../components/nav/nav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-foods',
  imports: [Nav, RouterModule],
  templateUrl: './foods.html',
  styleUrl: './foods.scss',
})
export class foods {
  onFilter() {
    throw new Error('Method not implemented.');
  }
  onSearch() {
    throw new Error('Method not implemented.');
  }

  foodService = inject(FoodService);
}
