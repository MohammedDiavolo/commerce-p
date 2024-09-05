import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
_http = inject(HttpClient);
data: any[] = [];
dataCategory: any[] = [];


private baseUrl: any = ' https://api.escuelajs.co/api/v1';

constructor( ) {}

getAllProducts(){
  return this._http.get(`${this.baseUrl}/products`)
}

getAllCategory() {
  return this._http.get(`${this.baseUrl}/products/categories`)
}

getProductByCategory(keyword:string){
  return this._http.get(`${this.baseUrl}/products/categories/${keyword}`)
}

getProductById(id:any){
  return this._http.get(`${this.baseUrl}/products/${id}`)
}
}
