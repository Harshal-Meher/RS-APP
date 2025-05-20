import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserAuthService } from '../services/auth/user-auth.service';

export const authGuard: CanActivateFn = () => {
  
  const authService = inject(UserAuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true; 
  }
   else {
    router.navigateByUrl('/auth/signIn'); 
    return false;
  }
};
