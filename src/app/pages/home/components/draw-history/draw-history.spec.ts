import { ComponentFixture, TestBed } from '@angular/core/testing';
import { drawHistory } from './draw-history';

describe('drawHistory', () => {
  let component: drawHistory;
  let fixture: ComponentFixture<drawHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [drawHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(drawHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
