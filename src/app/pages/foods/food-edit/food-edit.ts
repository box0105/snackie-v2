import { Component, inject, OnInit, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FoodService } from '../../../services/foods';
import { Header } from '../../../components/header/header';
import { ActivatedRoute, Router } from '@angular/router';
import { Fav } from '../components/fav/fav';
import { Prop } from '../components/prop/prop';
import { FoodFormHelper } from '../../../services/food-form.helper';

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

  isEdit = signal(false);
  foodId!: number;
  applyForm!: FormGroup;
  previewUrl: string | null = null;

  ngOnInit(): void {
    // init Form & load data
    this.foodId = Number(this.route.snapshot.paramMap.get('id'));
    this.foodService.setCurrId(this.foodId);
    this.isEdit.set(!!this.foodId);
    const food = this.foodService.currFood;

    if (food) {
      this.applyForm = this.foodFormHelper.create(food);
    } else {
      this.applyForm = this.foodFormHelper.create();
    }
  }

  onSubmit() {
    if (this.applyForm.invalid) return;

    if (this.isEdit()) {
      this.foodService.update(this.foodId, this.applyForm.value);
    } else {
      this.foodService.create(this.applyForm.value);
    }
    this.router.navigate(['/foods']);
  }

  async onFileSelected(event: Event) {
    this.previewUrl = await this.foodFormHelper.handleFileSelected(
      event,
      this.applyForm
    );
  }
}
