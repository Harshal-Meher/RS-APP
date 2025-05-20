import { Component, HostListener, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminLoginModelComponent } from '../components/admin-login-model/admin-login-model.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../../services/auth/admin-auth.service';
import { UserAuthService } from '../../../services/auth/user-auth.service';
import { CourseService } from '../../services/courses/course.service';

@Component({
  selector: 'app-sidebar',
  templateUrl:'./sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isLoading = false;
  isSidebarOpen = true;


  open:boolean=false;
  isLoggingOut = false;
  isMobileView: boolean =false;
  status:boolean=false;
  adminUser: any;
  constructor(
    public authService: AdminAuthService,
    private userAuthService: UserAuthService, 
    private dialog: MatDialog,
    private toastMsg: ToastrService,
    private coursesService: CourseService,
    private router:Router

  ) {}

  ngOnInit(): void {
    this.isMobileView = this.isMobile();
    this.checkAdminLoginStatus();

  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;

  }

  isMobile(): boolean {
    return typeof window !== 'undefined' && window.innerWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (typeof window !== 'undefined') {
      this.isMobileView = this.isMobile();
    }
  }

  //  isLoggingOut = false; 
    userCount: number = 0;
    userLogin: number = 0;
  
   
    
    checkAdminLoginStatus() {
      const interval = setInterval(() => {
        if (!this.authService.isLoggedIn()) {
            this.toastMsg.info('Login Please....', '', {
            // positionClass: 'toast-top-center',
            });
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
        width: '500px',
        height:'auto',
        data: { isAdmin: true },
      });
    }

  }