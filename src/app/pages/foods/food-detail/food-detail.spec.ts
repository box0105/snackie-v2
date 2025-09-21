import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodyDetail } from './food-detail';

describe('TodaySpecial', () => {
  let component: FoodyDetail;
  let fixture: ComponentFixture<FoodyDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodyDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodyDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
