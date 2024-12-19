import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginRequest } from '../model/auth/login-request';
import { TokenResponse } from '../model/auth/token-response';
import { environment } from '../../../environments/environment';
import { RegisterRequest } from '../model/auth/register-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _apiUrl = `${environment.apiUrl}/auth`;

  constructor() { }

  login(loginRequest:LoginRequest):Observable<TokenResponse>{    
    return this._httpClient.post<TokenResponse>(`${this._apiUrl}/login`,loginRequest).pipe(
      tap((res)=>{
        if(res.token){
          this.saveToken(res.token);
        }
      }
    ));
  }

  register(registerRequest:RegisterRequest):Observable<TokenResponse>{
    return this._httpClient.post<TokenResponse>(`${this._apiUrl}/register`,registerRequest).pipe(
      tap((res)=>{
        if(res.token){
          this.saveToken(res.token);
        }
      }
    ));
  }

  saveToken(token:string){
    localStorage.setItem('token',token);
  }
}
