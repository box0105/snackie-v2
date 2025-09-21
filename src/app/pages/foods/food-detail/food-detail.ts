import { Component, inject, OnInit } from '@angular/core';
import { Btn } from '../../../components/btn/btn';
import { FoodService } from '../../../services/foods';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../components/card/card';

@Component({
  selector: 'app-today-special',
  imports: [Btn, Card],
  templateUrl: './food-detail.html',
  styleUrl: './food-detail.scss',
})
export class FoodyDetail implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  FoodService = inject(FoodService);

  goToHome() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (!isNaN(id)) this.FoodService.setCurrId(id);
    });
  }
}
