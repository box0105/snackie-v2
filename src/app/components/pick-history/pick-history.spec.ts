import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickHistory } from './pick-history';

describe('PickHistory', () => {
  let component: PickHistory;
  let fixture: ComponentFixture<PickHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
