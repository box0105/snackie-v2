import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodEdit } from './food-edit';

describe('FoodEdit', () => {
  let component: FoodEdit;
  let fixture: ComponentFixture<FoodEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
