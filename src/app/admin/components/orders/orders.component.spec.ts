import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrdersComponent } from './orders.component';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersComponent ],  // تسجيل OrdersComponent هنا
      imports: [ CommonModule, FormsModule ]  // استيراد CommonModule و FormsModule
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu display', () => {
    const button = fixture.debugElement.query(By.css('.action-button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    const menu = fixture.debugElement.query(By.css('.menu'));
    expect(menu.nativeElement.style.display).toBe('block');
    
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(menu.nativeElement.style.display).toBe('none');
  });

  it('should perform action', () => {
    spyOn(window, 'alert');
    component.performAction('shipped');
    expect(window.alert).toHaveBeenCalledWith('Action: shipped');
  });
});
