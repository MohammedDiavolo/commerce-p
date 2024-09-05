import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { Category, Product } from '../../mode/products';
import { ProductsService } from '../../services/products.service';
import { SelectComponent } from "../../../shared/components/select/select.component";
import { ProductComponent } from "../product/product.component";
import { Category, Product } from '../../models/products';

@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [CommonModule, SelectComponent, ProductComponent],
  templateUrl: '../all-products/all-products.component.html',
  styleUrls: ['../all-products/all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  data: Product[] = [];
  dataCategory: Category[] = [];
  cartProducts:any[] =[];



  constructor(private readonly _service:ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  getAllProducts() {
    this._service.getAllProducts().subscribe((response:any)=>{
      this.data = response;
    })
  }

  getAllCategory(){
    this._service.getAllCategory().subscribe((response:any) => {
      this.dataCategory = response;
    })
  }

  filterCategory(event:any){
    let value = event.target.value;
    // console.log(value);
    if(value == "all"){
      this.getAllProducts();
    } else{
      this.getProductsCategory(value);
    }
  }

  getProductsCategory(keyword:string) {
    this._service.getProductByCategory(keyword).subscribe((res:any) =>{
      this.data = res
    })
  }
  addToCart(event: any) {
    event.quantity = 1;
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);

      const exist = this.cartProducts.find(item => item.id === event.id);

      if (exist) {
        alert("Product is already in the cart.");
      } else {
        this.cartProducts.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartProducts));
      }

    } else {
      this.cartProducts = [event];
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    }
  }


}
