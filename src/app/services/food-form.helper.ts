// food-form.helper.ts
import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Food } from '../models/food.model';

@Injectable({ providedIn: 'root' })
export class FoodFormHelper {
  private fb = inject(FormBuilder);

  create(food?: Food): FormGroup {
    return this.fb.group({
      name: [food?.name ?? '', Validators.required],
      img: [food?.img ?? '', Validators.required],
      quote: [food?.quote ?? '', Validators.required],
      isFav: [food?.isFav ?? false],
      hydrationRating: [food?.hydrationRating ?? 0,[Validators.required, Validators.min(1), Validators.max(5)]],
      satietyRating: [food?.satietyRating ?? 0, [Validators.required, Validators.min(1), Validators.max(5)]],
      priceRating: [food?.priceRating ?? 0, [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }

  patchForm(form: FormGroup, food: Food) {
    if (!form || !food) return;
    form.patchValue(food);
  }

  handleFileSelected(event: Event, form: FormGroup): Promise<string | null> {
    return new Promise((resolve) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (!file) return resolve(null);

      const reader = new FileReader();
      reader.onload = () => {
        form.patchValue({ img: file.name });
        form.get('img')?.markAsDirty();
        resolve(reader.result as string);
      };
      reader.readAsDataURL(file);
    });
  }
}
