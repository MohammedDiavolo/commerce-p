import { Injectable } from '@angular/core';

const TOKEN = 'ecom-token';
const USER = 'ecom-user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  public saveUser(user): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getToken(): string | null {
    return localStorage.getItem(TOKEN);
  }

  static getUser(): any {
    const user = localStorage.getItem(USER);
    return user ? JSON.parse(user) : null;
  }

  static getUserId(): string {
    const user = this.getUser();
    return user ? user.userId : '';
  }

  static getUserRole(): string {
    const user = this.getUser();
    return user ? user.role : '';
  }

  static isAdminLoggedIn(): boolean {
    const token = this.getToken();
    const role = this.getUserRole();
    return !!token && role === 'ADMIN';
  }

  static isCustomerLoggedIn(): boolean {
    const token = this.getToken();
    const role = this.getUserRole();
    return !!token && role === 'CUSTOMER';
  }

  static signOut(): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
}
