import { Component, Renderer2 } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent {
  months: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years: number[] = [];
  cartProducts:any[] =[]
  total:any = 0

  cartVisible = false;
  constructor(private renderer: Renderer2) {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i <= 10; i++) {
      this.years.push(currentYear + i);
    }
  }

  ngOnInit(): void {
      this.getCartProducts()
    }

  toggleCart() {
    this.cartVisible = !this.cartVisible;
    const cartElement = document.getElementById('cartElement');
    if (this.cartVisible) {
      cartElement?.classList.add('active');
    } else {
      cartElement?.classList.remove('active');
    }
  }


  get cartButtonText(): string {
    return this.cartVisible ? 'Hide your cart' : 'Show your cart';
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
