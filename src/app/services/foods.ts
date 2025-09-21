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

  create(data: Food) {
    this.foods.update((list) => {
      // 取得當前最新 list 的最大 id
      const maxId = list.length ? Math.max(...list.map((f) => f.id)) : 0;
      const newFood: Food = { ...data, id: maxId + 1 };
      return [...list, newFood];
    });
  }

  update(id: number, data: Partial<Food>) {
    this.foods.update((list) =>
      list.map((f) => (f.id === id ? { ...f, ...data } : f))
    );
  }
}
