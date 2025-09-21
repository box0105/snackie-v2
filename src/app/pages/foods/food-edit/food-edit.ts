import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FoodService } from '../../../services/foods';
import { Header } from '../../../components/header/header';
import { ActivatedRoute, Router } from '@angular/router';
import { Fav } from '../components/fav/fav';
import { Prop } from '../components/prop/prop';
import { FoodFormHelper } from './food-from.helper';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.html',
  styleUrl: './food-edit.scss',
  imports: [Header, ReactiveFormsModule, Fav, Prop],
})
export class FoodEdit implements OnInit {
  foodService = inject(FoodService);
  private foodFormHelper = inject(FoodFormHelper);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  foodId!: number;
  applyForm!: FormGroup;
  previewUrl: string | null = null;

  ngOnInit(): void {
    // init Form & load data
    this.foodId = Number(this.route.snapshot.paramMap.get('id'));
    this.foodService.setCurrId(this.foodId);
    const food = this.foodService.currFood;

    if (!food) {
      this.router.navigate(['/foods']);
      return;
    }

    this.applyForm = this.foodFormHelper.create(food);
  }

  onSubmit() {
    if (this.applyForm.invalid) return;
    this.foodService.update(this.foodId, this.applyForm.value);
    this.router.navigate(['/foods']);
  }

  async onFileSelected(event: Event) {
    this.previewUrl = await this.foodFormHelper.handleFileSelected(
      event,
      this.applyForm
    );
  }
}
