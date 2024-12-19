import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterRequest } from '../../../core/model/auth/register-request';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent {
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);

  registerForm = this._formBuilder.group({
    name:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required]
  });

  register(){
    if(this.registerForm.valid){
      this._authService.register(this.registerForm.value as RegisterRequest).subscribe(
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

  constructor() { }
}
