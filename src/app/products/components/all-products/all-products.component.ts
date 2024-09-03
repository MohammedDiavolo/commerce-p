import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category, Product } from '../../mode/products';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../all-products/all-products.component.html',
  styleUrls: ['../all-products/all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  data: Product[] = [];
  dataCategory: Category[] = [];


  constructor(private readonly _service:ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  getAllProducts() {
    this._service.getAllProducts().subscribe((response:any)=>{
      this.data = response;
      console.log(response)

    })
  }

  getAllCategory(){
    this._service.getAllCategory().subscribe((response:any) => {
      this.dataCategory = response;
      console.log(response);
    })
  }

  filterCategory(event:any){
    let value = event.target.value;
    console.log(value);
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
}
