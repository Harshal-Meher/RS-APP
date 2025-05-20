import { Component, OnInit, OnDestroy, HostListener, ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AdminAuthService } from '../../services/auth/admin-auth.service';
import { UserAuthService } from '../../services/auth/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  userEmail: string = '';
  isLoading: boolean = false;
  isCollapsed: boolean = true;
  isHidden: boolean = true;
  private authSubscription!: Subscription;
  private userSubscription!: Subscription;

  constructor(
    public authService: AdminAuthService,
    public userAuthService: UserAuthService,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) {
    // Set initial state immediately
    this.isLoggedIn = this.userAuthService.isAuthenticated();
    this.userEmail = this.userAuthService.getUserEmail();
  }

  ngOnInit() {
    this.authSubscription = this.userAuthService.authState$.subscribe(
      (isAuthenticated) => {
        this.isLoggedIn = isAuthenticated;
        this.cdr.detectChanges(); // Force change detection
      }
    );

    this.userSubscription = this.userAuthService.currentUser$.subscribe(
      (user) => {
        this.userEmail = user ? user.email : '';
        this.cdr.detectChanges(); // Force change detection
      }
    );
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  logoutWithSpinner() {
    this.isLoading = true;
    setTimeout(() => {
      this.userAuthService.logout();
      this.snackBar.open('Logout Successfully!', 'Close', {
        duration: 3000,
        panelClass: ['bg-success', 'text-white']
      });
      this.isLoading = false;
    }, 3000);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isHidden = window.pageYOffset <= 50;
  }
}