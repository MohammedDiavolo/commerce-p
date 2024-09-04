import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss'
})
export class ProductsDetailsComponent implements OnInit{
  id:any
  product:any ={}
  cartProducts:any[] =[];
  quantity: number = 1;
  constructor(private route:ActivatedRoute, private service:ProductsService){
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }
  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.service.getProductById(this.id).subscribe(res =>{
      this.product = res
    })
  }

  addToCart(product: any) {
    const productWithQuantity = { ...product, quantity: this.quantity };
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      const exist = this.cartProducts.find(item => item.id == productWithQuantity.id);

      if (exist) {
        alert("Product is already added");
      } else {
        this.cartProducts.push(productWithQuantity);
        localStorage.setItem("cart", JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(productWithQuantity);
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    }
  }
}
