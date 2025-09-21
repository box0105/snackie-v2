import { Routes } from '@angular/router';
import { FoodRouteGuard } from './services/food-route.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'draw-food', pathMatch: 'full' },
  {
    path: 'draw-food',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'foods',
    loadComponent: () => import('./pages/foods/foods').then((m) => m.foods),
  },
  {
    path: 'foods/add',
    loadComponent: () =>
      import('./pages/foods/food-edit/food-edit').then((m) => m.FoodEdit),
  },
  {
    path: 'foods/:id',
    loadComponent: () =>
      import('./pages/foods/food-detail/food-detail').then(
        (m) => m.FoodyDetail
      ),
    canActivate: [FoodRouteGuard],
  },
  {
    path: 'foods/:id/edit',
    loadComponent: () =>
      import('./pages/foods/food-edit/food-edit').then((m) => m.FoodEdit),
    canActivate: [FoodRouteGuard],
  },
];
