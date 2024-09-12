import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgFor,NgStyle],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
menuDisplay: any;
performAction(arg0: string) {
throw new Error('Method not implemented.');
}
toggleMenu($event: MouseEvent) {
throw new Error('Method not implemented.');
}

  orders : any;

  constructor(private adminservice: AdminService,
    private snackBar: MatSnackBar){

    }

  ngOnInit(){
    this.getPlaceOrders();
  }
  getPlaceOrders(){
    this.adminservice.getpPlacedOrders().subscribe(res =>{
      this.orders = res;
    })
  }

}
