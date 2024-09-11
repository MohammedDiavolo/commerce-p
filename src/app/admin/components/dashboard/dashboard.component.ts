import { Router, RouterLink } from '@angular/router';
import { AdminService } from './../../service/admin.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: any[] = [];

  constructor(
    private adminService: AdminService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.products = [];
    this.adminService.getAllProducts().subscribe((response: any) => {
      response.forEach((element: any) => {
        element.processdImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.products.push(element);
      });
    });
  }



  deleteProduct(productId: any) {
    this.adminService.deleteProduct(productId).subscribe((res: any) => {
      if (res.body == null) {
        this.snackBar.open('Product Deleted Successfully!', 'close', {
          duration: 5000
        });
        this.getAllProducts();
      } else {
        this.snackBar.open(res.message, 'close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
      }
    });
  }
}
