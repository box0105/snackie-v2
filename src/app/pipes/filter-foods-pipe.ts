import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../models/food.model';

@Pipe({
  name: 'filterFoods',
})
export class FilterFoodsPipe implements PipeTransform {
  transform(foods: Food[], searchTerm: string): Food[] {
    if (!searchTerm) return foods;
    return foods.filter((food) => food.name.toLowerCase().includes(searchTerm));
  }
}
