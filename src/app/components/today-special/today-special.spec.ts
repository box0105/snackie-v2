import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySpecial } from './today-special';

describe('TodaySpecial', () => {
  let component: TodaySpecial;
  let fixture: ComponentFixture<TodaySpecial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaySpecial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaySpecial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
