import { Injectable, signal } from '@angular/core';
import { Food } from '../models/food.model';
import { MOCK_FOODS } from '../mock/food.mock';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  foods = signal<Food[]>(MOCK_FOODS);
  filterFoods = signal(this.foods());
  currId = signal<number>(1);
  searchKeyword = signal('');

  // 當前抽獎的食物
  get currFood(): Food | null {
    return this.foods().find((f) => f.id === this.currId()) ?? null;
  }

  setCurrId(id: number) {
    this.currId.set(id);
  }

  draw() {
    const pickList = this.foods().filter((food) => food.isPicked);
    if (pickList.length === 0) {
      this.currId.set(0);
      return;
    }

    const randomIndex = Math.floor(Math.random() * pickList.length);
    const selectedFood = pickList[randomIndex];
    this.currId.set(selectedFood.id);
  }

  create(data: Food) {
    this.foods.update((list) => {
      const maxId = list.length ? Math.max(...list.map((f) => f.id)) : 0;
      const newFood: Food = { ...data, id: maxId + 1 };
      return [...list, newFood];
    });
  }

  search() {
    const key = this.searchKeyword().trim().toLowerCase();
    if (!key) this.reset();

    this.filterFoods.set(
      this.foods().filter((f) => f.name.toLowerCase().includes(key))
    );
  }

  reset() {
    this.foods.set(MOCK_FOODS);
  }

  update(id: number, data: Partial<Food>) {
    this.foods.update((list) =>
      list.map((f) => (f.id === id ? { ...f, ...data } : f))
    );
  }
}
