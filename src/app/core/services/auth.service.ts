import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginRequest } from '@core/model/auth/login-request';
import { TokenResponse } from '@core/model/auth/token-response';
import { RegisterRequest } from '@core/model/auth/register-request';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _apiUrl = `${environment.apiUrl}/auth`;
  private tokenKey = 'token';

  constructor() { }

  login(loginRequest:LoginRequest):Observable<TokenResponse>{    
    return this._httpClient.post<TokenResponse>(`${this._apiUrl}/login`,loginRequest).pipe(
      tap((res)=>{
        this.saveToken(res);
      }
    ));
  }

  register(registerRequest:RegisterRequest):Observable<TokenResponse>{
    return this._httpClient.post<TokenResponse>(`${this._apiUrl}/register`,registerRequest).pipe(
      tap((res)=>{
        this.saveToken(res);
      }
    ));
  }

  saveToken(tokenResponse:TokenResponse){
    localStorage.setItem(this.tokenKey,tokenResponse.token);
  }

  getToken(){
    return localStorage.getItem(this.tokenKey) || '';
  }

  logout(){
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(){
    const token = this.getToken();
    if(!token){
      return false;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    return (payload.exp*1000) > Date.now();  
  }
}
