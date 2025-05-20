import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AdminAuthService } from '../services/auth/admin-auth.service';

export const adminAuthGuard: CanActivateFn = () => {
  
  const authService = inject(AdminAuthService);
  const router = inject(Router);
  
  if (authService.isLoggedIn()) {
    return true;
  }
   else {
    router.navigateByUrl('/useradmin/mainpanel/home');
    authService.showNotification('Please log in as an admin to access this page.', 'error');
    return false;
  }
};


