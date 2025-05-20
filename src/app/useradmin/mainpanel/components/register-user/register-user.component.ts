import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterUserViewComponent } from '../register-user-view/register-user-view.component';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserAuthService } from '../../../../services/auth/user-auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit, OnDestroy {
  userView: any[] = [];
  activeUserCount: number = 0;
  inactiveUserCount: number = 0;
  totalUserCount: number = 0;
  activationRequests: any[] = [];
  selectedUser: any = null;

  private deactivationSub!: Subscription;
  private authSubscription!: Subscription;

  constructor(
    public userAuthService: UserAuthService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.refreshData();

    this.deactivationSub = this.userAuthService.accountDeactivation$.subscribe(token => {
      if (token && token === this.userAuthService.getToken()) {
        this.toastr.error('Your account has been deactivated by an admin!', 'Account Deactivated', {
          timeOut: 5000
        });
        this.router.navigate(['/sign-in']);
      }
    });

    this.authSubscription = this.userAuthService.userData$.subscribe(() => {
      this.refreshData();
    });
  }

  ngOnDestroy() {
    if (this.deactivationSub) this.deactivationSub.unsubscribe();
    if (this.authSubscription) this.authSubscription.unsubscribe();
  }

  loadUserData() {
    const storedData = this.userAuthService.getUserData();
    if (storedData) {
      this.userView = storedData.map((user: any) => ({
        ...user,
        isActive: user.isActive ?? true
      }));
      this.updateUserCounts();
      this.cdr.detectChanges();
    }
  }

  loadActivationRequests() {
    this.activationRequests = this.userAuthService.getActivationRequests();
    this.cdr.detectChanges();
  }

  toggleActivation(user: any, newStatus: string) {
    const isActive = newStatus === 'active';
    if (user.isActive === isActive) return;

    const action = isActive ? 'activate' : 'deactivate';
    if (confirm(`Are you sure you want to ${action} ${user.firstname} ${user.lastname}'s account?`)) {
      this.userAuthService.toggleUserActivation(user.token, isActive);
      if (this.selectedUser?.token === user.token) {
        this.selectedUser.isActive = isActive;
        if (!isActive) this.selectedUser = null;
      }
      this.refreshData();
      // this.toastr.success(`${user.firstname} ${user.lastname}'s status updated to ${isActive ? 'Active' : 'Inactive'}`, 'Status Changed', { timeOut: 3000 });
    } else {
      this.cdr.detectChanges();
    }
  }

  updateUserCounts() {
    this.activeUserCount = this.userView.filter(user => user.isActive).length;
    this.inactiveUserCount = this.userView.filter(user => !user.isActive).length;
    this.totalUserCount = this.userView.length;
  }

  openDialogBox(user: any) {
    this.dialog.open(RegisterUserViewComponent, {
      width: '500px',
      data: user
    });
  }

  selectUser(user: any) {
    this.selectedUser = { ...user };
  }

  refreshData() {
    this.loadUserData();
    this.loadActivationRequests();
  }

  acceptRequest(request: any) {
    if (confirm(`Are you sure you want to activate ${request.firstname} ${request.lastname}'s account?`)) {
      this.userAuthService.toggleUserActivation(request.token, true);
      this.userAuthService.clearActivationRequest(request.token);
      this.refreshData();
      this.toastr.success(`${request.firstname} ${request.lastname}'s account activated!`, 'Request Accepted', { timeOut: 3000 });
    }
  }

  // // 🚀 Open Edit Profile Dialog
  // openDialogBox(user: any) {
  //   const dialogRef = this.dialog.open(RegisterUserViewComponent, {
  //     width: '500px',
  //     data: user
  //   });
  //   dialogRef.afterClosed().subscribe((updatedProfile: any) => {
  //     if (updatedProfile) {
  //       this.userAuthService.updateUser(updatedProfile);
  //       this.refreshData();
  //       this.toastr.success('Profile updated successfully!', 'Success', { timeOut: 3000 });
  //     }
  //   });
  // }


  // 🚀 Delete User Profile
  deleteUser(user: any) {
    if (confirm(`Are you sure you want to delete ${user.firstname} ${user.lastname}'s profile?`)) {
      this.userAuthService.deleteUser(user.token);
      this.selectedUser = null;
      this.refreshData();
      this.toastr.warning('User profile deleted!', 'Deleted', { timeOut: 3000 });
    }
  }
}
