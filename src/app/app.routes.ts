import { Routes } from '@angular/router';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { LoginComponent } from './auth/components/login/login/login.component';

export const routes: Routes = [
  {
    path:'',
    component: AllProductsComponent,
    title: 'Product-Page'
  },
  {
    path:'product/details',
    component: ProductsDetailsComponent,
    title: 'Product-Details-Page'
  },
  {
    path:'cart',
    component: CartComponent,
    title: 'Cart-page'
  },
  {
    path:'login',
    component:LoginComponent,
    title:'Login-page'
  }
];
