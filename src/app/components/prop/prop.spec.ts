import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prop } from './prop';

describe('Prop', () => {
  let component: Prop;
  let fixture: ComponentFixture<Prop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
