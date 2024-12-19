import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { LoginRequest } from '../../../core/model/auth/login-request';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);

  loginForm = this._formBuilder.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required]
  });

  login(){
    if(this.loginForm.valid){
      this._authService.login(this.loginForm.value as LoginRequest).subscribe(
        {
          next:(res)=>{
            console.log(res);
          },
          error:(err)=>{
            console.log(err);
          },
          complete:()=>{
            this._router.navigate(['/home']);
          }
        }
      );
    }
  }

}
