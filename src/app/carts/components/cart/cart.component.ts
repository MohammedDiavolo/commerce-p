import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  cartProducts:any[] =[]
  total:any = 0
  constructor(){}

  ngOnInit(): void {
    this.getCartProducts()
  }
  addAmount(index:number){
    this.cartProducts[index].quantity++
    this.getCartTotal();
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
  }
  minsAmount(index: number) {
    if (this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--;
      this.getCartTotal();
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    }
  }
  getCartProducts() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
    }
    console.log(this.cartProducts);
    this.getCartTotal();
  }

  detectChange(){
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  deleteProduct(index:number){
    this.cartProducts.splice(index,1)
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }
  clearCart(){
    this.cartProducts=[]
    this.getCartTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }
  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total += this.cartProducts[x].price * this.cartProducts[x].quantity;
    }
    this.total = parseFloat(this.total.toFixed(2));
  }
}
