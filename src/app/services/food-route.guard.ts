import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { FoodService } from './foods';

@Injectable({ providedIn: 'root' })
export class FoodRouteGuard implements CanActivate {
  constructor(private router: Router, private foodService: FoodService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = Number(route.paramMap.get('id'));

    if (isNaN(id)) {
      this.router.navigate(['/']);
      return false;
    }

    this.foodService.setCurrId(id);
    if (!this.foodService.currFood) {
      this.router.navigate(['/']);
      return false;
    }

    // console.log('valid id', id);
    return true;
  }
}
