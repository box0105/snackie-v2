import { ComponentFixture, TestBed } from '@angular/core/testing';
import { foods } from './foods';

describe('foods', () => {
  let component: foods;
  let fixture: ComponentFixture<foods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [foods]
    })
    .compileComponents();

    fixture = TestBed.createComponent(foods);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
