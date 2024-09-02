import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit,Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProuctsService implements OnInit {
  // _http = inject(HttpClient);
  data: any[] = [];
  dataCategory: any[] = [];


  private baseUrl: string = 'https://fakestoreapi.com/products';
  private baseUrlCategory: string = 'https://fakestoreapi.com/products/categories';

  constructor( readonly _http: HttpClient) {}
  ngOnInit(): void {
    this.getAllData();
    this.getAllCategory();
  }

  getAllData() {
    this._http.get(this.baseUrl).subscribe((respon: any) => {
      console.log(respon);
      this.data = respon;
    });
  }

  getAllCategory() {
    this._http.get(this.baseUrlCategory).subscribe((respon: any) => {
      console.log(respon);
      this.dataCategory = respon;
    });
  }
}
