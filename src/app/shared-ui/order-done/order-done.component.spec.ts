import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDoneComponent } from './order-done.component';

describe('OrderDoneComponent', () => {
  let component: OrderDoneComponent;
  let fixture: ComponentFixture<OrderDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDoneComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
