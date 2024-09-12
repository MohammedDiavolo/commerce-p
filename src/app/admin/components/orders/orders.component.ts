import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  menuDisplay: string = 'none';
  orders: any;

  constructor(private adminservice: AdminService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getPlaceOrders();
  }

  getPlaceOrders() {
    this.adminservice.getpPlacedOrders().subscribe(res => {
      this.orders = res;
    });
  }

  performAction(action: string) {
    console.log(`Action performed: ${action}`);
    // Add logic to handle the action, e.g., updating the order status
  }

  toggleMenu(event: MouseEvent) {
    this.menuDisplay = this.menuDisplay === 'none' ? 'block' : 'none';
  }
}
