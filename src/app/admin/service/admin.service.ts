import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../auth/service/storage/user-storage.service';

const base_url = "https://fakestoreapi.com/"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient) { }

  addCategory(categoryDto:any):Observable<any>{
    return this._http.post(`${base_url}category`,categoryDto,{
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllCategory():Observable<any>{
    return this._http.get(`${base_url}products/categories`,{
      headers: this.createAuthorizationHeader(),
    })
  }

  addProduct(productDto:any):Observable<any>{
    return this._http.post(`${base_url}products`,productDto,{
      headers: this.createAuthorizationHeader(),
    })
  }

  deleteProduct(productId:any):Observable<any>{
    return this._http.delete(`${base_url}products/${productId}`,{
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllProducts():Observable<any>{
    return this._http.get(`${base_url}products`,{
      headers: this.createAuthorizationHeader(),
    })
  }

  getpPlacedOrders():Observable<any>{
    return this._http.get(`${base_url}products`,{
      headers: this.createAuthorizationHeader(),
    })
  }
  private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer' + UserStorageService.getToken()
    )
  }
}
