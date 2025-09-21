import { Injectable, signal } from '@angular/core';
import { Food } from '../models/food.model';
import { MOCK_FOODS } from '../mock/food.mock';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  foods = signal<Food[]>(MOCK_FOODS);
  currId = signal<number>(1);

  get currFood(): Food | null {
    return this.foods().find((f) => f.id === this.currId()) ?? null;
  }

  setCurrId(id: number) {
    this.currId.set(id);
  }

  draw() {
    const index = Math.floor(Math.random() * this.foods().length);
    this.currId.set(index + 1);
  }

  update(id: number, data: Partial<Food>) {
    this.foods.update(list =>
      list.map(f => f.id === id ? { ...f, ...data } : f)
    );
  }
}
