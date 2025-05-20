import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

interface RegisterUser {
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  constructor(
    private toastr: ToastrService,
    private dialog: MatDialog,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.addDefaultAdmin();
    }
  }

  showNotification(message: string, type: 'success' | 'error' | 'info' = 'info'): void {
    const config = { timeOut: 3000 };
    switch (type) {
      case 'success':
        this.toastr.success(message, '', config);
        break;
      case 'error':
        this.toastr.error(message, '', config);
        break;
      case 'info':
      default:
        this.toastr.info(message, '', config);
        break;
    }
  }

  authenticateUser(email: string, password: string, isAdmin: boolean): RegisterUser | null {
    if (isPlatformBrowser(this.platformId)) {
      const localUsers = localStorage.getItem('users');
      if (!localUsers) return null;

      const users: RegisterUser[] = JSON.parse(localUsers);
      return users.find(
        (user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password
      ) || null;
    }
    return null;
  }

  setLoggedInUser(user: RegisterUser) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('loggedUser', JSON.stringify(user));
    }
  }

  getLoggedInUser(): RegisterUser | null {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem('loggedUser');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  isLoggedIn(): boolean {
    return isPlatformBrowser(this.platformId) ? !!this.getLoggedInUser() : false;
  }

  logout() {
  //   const dialogRef = this.dialog.open(LogoutConfirmboxComponent, {
  //     width: '350px',
  //     data: { message: 'Are you sure you want to log out?' }
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result && isPlatformBrowser(this.platformId)) {
  //       localStorage.removeItem('loggedUser');
  //       this.router.navigateByUrl('/useradmin/mainpanel/home');
  //       this.toastr.success('You have been logged out!', 'Logout Successful');
  //     }
  //   });
  }

  addDefaultAdmin() {
    if (isPlatformBrowser(this.platformId)) {
      const defaultAdmin: RegisterUser = {
        email: 'admin@gmail.com',
        password: 'Admin@123',
        role: 'admin'
      };

      let users: RegisterUser[] = [];
      const localUsers = localStorage.getItem('users');
      if (localUsers) {
        users = JSON.parse(localUsers);
      }

      if (!users.some((user) => user.email === defaultAdmin.email)) {
        users.push(defaultAdmin);
        localStorage.setItem('users', JSON.stringify(users));
      }
    }
  }
}