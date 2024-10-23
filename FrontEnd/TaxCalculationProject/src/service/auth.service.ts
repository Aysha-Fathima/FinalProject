import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _http : HttpClient;
  private isAuthenticated = false;
  private authSecretKey = 'Bearer Token';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(a:HttpClient) {
    this._http = a;
    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey) 
  }

  login(formData:any){
    this.isAuthenticated = true;
  }

  logout(): void{
    localStorage.removeItem(this.authSecretKey);
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
