import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfRestaurantComponent } from './conf-restaurant.component';

describe('ConfRestaurantComponent', () => {
  let component: ConfRestaurantComponent;
  let fixture: ComponentFixture<ConfRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
