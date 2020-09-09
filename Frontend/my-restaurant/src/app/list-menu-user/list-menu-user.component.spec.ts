import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMenuUserComponent } from './list-menu-user.component';

describe('ListMenuUserComponent', () => {
  let component: ListMenuUserComponent;
  let fixture: ComponentFixture<ListMenuUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMenuUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMenuUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
