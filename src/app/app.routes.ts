import { Routes } from '@angular/router';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { LoginComponent } from './auth/components/login/login/login.component';
import { SignupComponent } from './auth/components/signup/signup/signup.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { CategoryComponent } from './admin/components/category/category/category.component';
import { PostProductComponent } from './admin/components/postProduct/post-product/post-product.component';
import { CheckOutComponent } from './user/components/check-out/check-out.component';
import { OrdersComponent } from './admin/components/orders/orders.component';

export const routes: Routes = [
  {
    path: '',
    component: AllProductsComponent,
    title: 'Product-Page'
  },
  {
    path: 'details/:id',
    component: ProductsDetailsComponent,
    title: 'Product-Details-Page'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart-page'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login-page'
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Signup-page'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard-page'
  },
  {
    path:'category',
    component:CategoryComponent,
    title:'Category-page'
  },
  {
    path:'product',
    component:PostProductComponent,
    title:'Product-page'
  },
  {
    path:'checkout',
    component:CheckOutComponent,
    title:'Checkout-page'
  },
  {
    path:'order',
    component:OrdersComponent,
    title:'Order-page'
  }
];
