import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
    clearActivationRequest: any;
  // Observable for auth state (logged in or not)
  private authStateSubject = new BehaviorSubject<boolean>(false); // Default to false on server
  authState$ = this.authStateSubject.asObservable();

  // Observable for current logged-in user data
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  // Observable for users who requested activation
  private activationRequestsSubject = new BehaviorSubject<any[]>([]);
  activationRequests$ = this.activationRequestsSubject.asObservable();

  // Observable for all registered user data
  private userDataSubject = new BehaviorSubject<any[]>([]);
  userData$ = this.userDataSubject.asObservable();

  // Observable for account deactivation events (token of deactivated user)
  private accountDeactivationSubject = new BehaviorSubject<string | null>(null);
  accountDeactivation$ = this.accountDeactivationSubject.asObservable();

  constructor(
    private router: Router,
    private toastMsg: ToastrService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Only initialize auth state and current user in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.authStateSubject.next(this.isAuthenticated());
      this.updateCurrentUser();
    }
  }

  // Register a new user (default active)
  registerUser(userData: any): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.showNotification('Registration is not available on the server.', 'error');
      return;
    }

    const existingData = localStorage.getItem('userRegistrations');
    let registrations = existingData ? JSON.parse(existingData) : [];

    const userExists = registrations.some((user: any) => user.email === userData.email);
    if (userExists) {
      this.showNotification('User with this email already exists!', 'error');
      return;
    }

    const dummyToken = 'dummy-token-' + Math.floor(Math.random() * 1000000000);
    const registrationData = {
      ...userData,
      token: dummyToken,
      isActive: true,
      activationRequested: false,
      registrationDate: new Date().toISOString()
    };
    registrations.push(registrationData);
    localStorage.setItem('userRegistrations', JSON.stringify(registrations));
    this.userDataSubject.next([...registrations]);
    // this.showNotification('Registration successful!', 'success');
  }

  // Login user
  loginUser(email: string, password: string): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      this.showNotification('Login is not available on the server.', 'error');
      return false;
    }

    const storedData = localStorage.getItem('userRegistrations');
    if (!storedData) return false;

    const registrations = JSON.parse(storedData);
    const user = registrations.find((u: any) => u.email === email && u.password === password);

    if (user) {
      if (user.isActive) {
        let activeUsers = JSON.parse(localStorage.getItem('activeUsers') || '[]');
        if (!activeUsers.includes(user.token)) {
          activeUsers.push(user.token);
          localStorage.setItem('activeUsers', JSON.stringify(activeUsers));
        }
        localStorage.setItem('userToken', user.token);
        this.updateAuthState(true);
        this.updateCurrentUser();
        this.router.navigate(['/']);
        return true;
      } else {
        this.showNotification('Your account is deactivated. Please contact admin.', 'error');
      }
    } else {
      this.showNotification('Invalid email or password!', 'error');
    }
    return false;
  }

  // Logout current user
  logout(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const userToken = this.getToken();
    if (userToken) {
      let activeUsers = JSON.parse(localStorage.getItem('activeUsers') || '[]');
      activeUsers = activeUsers.filter((token: string) => token !== userToken);
      localStorage.setItem('activeUsers', JSON.stringify(activeUsers));
    }
    localStorage.removeItem('userToken');
    this.updateAuthState(false);
    this.updateCurrentUser();
    this.showNotification('Logged out successfully!', 'success');
    this.router.navigate(['/']);
  }

  // Check if user is authenticated (has valid token)
  isAuthenticated(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    return !!this.getToken();
  }

  // Get logged-in user's token
  getToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    return localStorage.getItem('userToken');
  }

  // Get all user registrations from localStorage
  getUserData(): any[] | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    const storedData = localStorage.getItem('userRegistrations');
    return storedData ? JSON.parse(storedData) : null;
  }

  // Get users who requested activation
  getActivationRequests(): any[] {
    if (!isPlatformBrowser(this.platformId)) return [];
    const registrations = this.getUserData() || [];
    return registrations.filter((user: any) => user.activationRequested);
  }

  // Request activation for a deactivated user by email
  requestActivation(email: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    let registrations = this.getUserData();
    if (!registrations) return;

    const userIndex = registrations.findIndex((u: any) => u.email === email);
    if (userIndex !== -1 && !registrations[userIndex].isActive) {
      registrations[userIndex].activationRequested = true;
      localStorage.setItem('userRegistrations', JSON.stringify(registrations));
      this.userDataSubject.next([...registrations]);
      this.activationRequestsSubject.next(this.getActivationRequests());
      this.showNotification('Activation request sent to admin!', 'success');
    } else {
      this.showNotification('User not found or already active!', 'error');
    }
  }

  // Toggle user activation/deactivation by token
  toggleUserActivation(token: string, isActive: boolean): void {
    if (!isPlatformBrowser(this.platformId)) return;

    let registrations = this.getUserData();
    if (!registrations) return;

    const userIndex = registrations.findIndex((u: any) => u.token === token);
    if (userIndex === -1) {
      this.showNotification('User not found!', 'error');
      return;
    }

    registrations[userIndex].isActive = isActive;
    registrations[userIndex].activationRequested = false;
    localStorage.setItem('userRegistrations', JSON.stringify(registrations));
    this.userDataSubject.next([...registrations]);
    this.activationRequestsSubject.next(this.getActivationRequests());

    if (!isActive) {
      const activeUsers = JSON.parse(localStorage.getItem('activeUsers') || '[]');
      if (activeUsers.includes(token)) {
        this.logoutUserByToken(token);
        this.accountDeactivationSubject.next(token);
      }
    }

    this.showNotification(`User ${isActive ? 'activated' : 'deactivated'} successfully!`, 'success');
  }

  // Logout user by token (used when user is deactivated)
  private logoutUserByToken(token: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    let activeUsers = JSON.parse(localStorage.getItem('activeUsers') || '[]');
    activeUsers = activeUsers.filter((t: string) => t !== token);
    localStorage.setItem('activeUsers', JSON.stringify(activeUsers));

    if (this.getToken() === token) {
      localStorage.removeItem('userToken');
      this.updateAuthState(false);
      this.updateCurrentUser();
      this.router.navigate(['/']);
      this.showNotification('Your account has been deactivated and logged out.', 'info');
    }
  }

  // Delete user by token
  deleteUser(userToken: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    let registrations = this.getUserData();
    if (!registrations) return;

    registrations = registrations.filter((user: any) => user.token !== userToken);
    localStorage.setItem('userRegistrations', JSON.stringify(registrations));
    this.userDataSubject.next([...registrations]);

    let activeUsers = JSON.parse(localStorage.getItem('activeUsers') || '[]');
    activeUsers = activeUsers.filter((token: string) => token !== userToken);
    localStorage.setItem('activeUsers', JSON.stringify(activeUsers));

    this.showNotification('User deleted successfully!', 'success');
    if (this.getToken() === userToken) {
      this.logout();
    }
  }

  // Update user data by token
  updateUser(userData: any): void {
    if (!isPlatformBrowser(this.platformId)) return;

    let registrations = this.getUserData();
    if (!registrations) {
      this.showNotification('No user data available!', 'error');
      return;
    }

    const index = registrations.findIndex((user: any) => user.token === userData.token);
    if (index === -1) {
      this.showNotification('User not found!', 'error');
      return;
    }

    const emailExists = registrations.some((user: any, i: number) =>
      user.email === userData.email && i !== index
    );

    if (emailExists) {
      this.showNotification('This email is already in use by another user!', 'error');
      return;
    }

    registrations[index] = { ...registrations[index], ...userData };
    localStorage.setItem('userRegistrations', JSON.stringify(registrations));
    this.userDataSubject.next([...registrations]);

    if (this.getToken() === userData.token) {
      this.updateCurrentUser();
    }

    this.showNotification('User updated successfully!', 'success');
  }

  // Get logged-in user's email
  getUserEmail(): string {
    if (!isPlatformBrowser(this.platformId)) return '';

    const token = this.getToken();
    const userData = this.getUserData();
    if (token && userData) {
      const currentUser = userData.find((user: any) => user.token === token);
      return currentUser?.email || '';
    }
    return '';
  }

  // Get count of active logged-in users
  getActiveUsersCount(): number {
    if (!isPlatformBrowser(this.platformId)) return 0;

    const activeUsers = JSON.parse(localStorage.getItem('activeUsers') || '[]');
    return activeUsers.length;
  }

  // Get emails of active users
  getActiveUsersEmails(): string[] {
    if (!isPlatformBrowser(this.platformId)) return [];

    const activeUsers = JSON.parse(localStorage.getItem('activeUsers') || '[]');
    const userData = this.getUserData();
    if (!userData) return [];
    return activeUsers
      .map((token: string) => {
        const user = userData.find((user: any) => user.token === token);
        return user?.email || '';
      })
      .filter((email: any) => email !== '');
  }

  // Private helper to update auth state BehaviorSubject
  private updateAuthState(isAuthenticated: boolean): void {
    this.authStateSubject.next(isAuthenticated);
  }

  // Private helper to update current user BehaviorSubject
  private updateCurrentUser(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.currentUserSubject.next(null);
      return;
    }

    const token = this.getToken();
    const userData = this.getUserData();
    if (token && userData) {
      const currentUser = userData.find((user: any) => user.token === token);
      this.currentUserSubject.next(currentUser || null);
    } else {
      this.currentUserSubject.next(null);
    }
  }

  // Show Toastr notification
  showNotification(message: string, type: 'success' | 'error' | 'info' = 'info'): void {
    if (!isPlatformBrowser(this.platformId)) return; // Avoid toastr on server

    const config = { timeOut: 3000 };
    switch (type) {
      case 'success':
        this.toastMsg.success(message, 'Success', config);
        break;
      case 'error':
        this.toastMsg.error(message, 'Error', config);
        break;
      default:
        this.toastMsg.info(message, 'Info', config);
        break;
    }
  }
}