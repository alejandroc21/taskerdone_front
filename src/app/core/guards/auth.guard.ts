import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuthenticated = authService.isAuthenticated();
  const isPublicRoute = ['login', 'register',''].includes(route.routeConfig?.path || '');
  console.log(isAuthenticated);
  
  
  if(isAuthenticated && isPublicRoute){
    router.navigate(['/home']);
    return false;
  }

  if(!isAuthenticated && !isPublicRoute){
    router.navigate(['/login']);
    return false;
  }
    
  return true;
};
