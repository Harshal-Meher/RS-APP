import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminLoginModelComponent } from '../admin-login-model/admin-login-model.component';
import { AdminAuthService } from '../../../../services/auth/admin-auth.service';
import { UserAuthService } from '../../../../services/auth/user-auth.service';
import { CourseService } from '../../../services/courses/course.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss'
})
export class AdminHeaderComponent {
  isLoggingOut = false; 
  userCount: number = 0;
  userLogin: number = 0;

  constructor(
    public authService: AdminAuthService,
    private userAuthService: UserAuthService, 
    private dialog: MatDialog,
    private toastMsg: ToastrService,
    private coursesService: CourseService
  ) {}

  ngOnInit() {
    this.checkAdminLoginStatus();
  }

  checkAdminLoginStatus() {
    const interval = setInterval(() => {
      if (!this.authService.isLoggedIn()) {
        this.toastMsg.info('Login Please....', '', {});
      } else {
        clearInterval(interval);
      }
    }, 10000);
  }


  getUserEmail(): string {
    return this.authService.getLoggedInUser()?.email || 'Not Available';
  }

  openAdminLoginDialog(): void {
    this.dialog.open(AdminLoginModelComponent, {
      width: '600px',
      data: { isAdmin: true },
    });
  }

  logout() {
    this.isLoggingOut = true;
    setTimeout(() => {
      this.isLoggingOut = false;
      this.authService.logout();
    }, 3000);
    this.toastMsg.success('Logout successful!', '', {
      positionClass: 'toast-top-center',
    });
  }

}
