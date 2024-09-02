import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category, Product } from '../../mode/products';

@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: '../all-products/all-products.component.html',
  styleUrls: ['../all-products/all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  data: Product[] = [];
  dataCategory: Category[] = [];

  private baseUrl: string = 'https://fakestoreapi.com/products';
  private baseUrlCategory: string = 'https://fakestoreapi.com/products/categories';
  _http = inject(HttpClient);

  constructor() {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getOneItem(1);
    this.getAllCategory();
    this.getOneCategory(1);
    console.log("Test");
  }

  getAllProducts() {
    this._http.get<Product[]>(this.baseUrl).subscribe((response: Product[]) => {
      console.log(response);
      this.data = response;
    });
  }

  getAllCategory() {
    this._http.get<Category[]>(this.baseUrlCategory).subscribe((response: Category[]) => {
      console.log(response);
      this.dataCategory = response;
    });
  }

  getOneItem(id:number){
    this._http.get(`${this.baseUrl}/${id}`).subscribe(
      (response:any)=>{
        console.log(response);
        this.data = response;
      } , error => {
        console.log(error.message)
      }
    );
  }
  getOneCategory(id:number){
    this._http.get(`${this.baseUrlCategory}/${id}`).subscribe(
      (response:any)=>{
        console.log(response);
        this.dataCategory = response;
      } , error => {
        console.log(error.message)
      }
    );
  }

  trackByCategoryId(index: number, category: Category): number {
    return category.id; // Ensure this is the correct unique identifier for categories
  }

  trackByProductId(index: number, product: Product): number {
    return product.id; // Ensure this is the correct unique identifier for products
  }
}
