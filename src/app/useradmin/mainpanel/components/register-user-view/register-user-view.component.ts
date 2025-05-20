import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { UpdateRegisterUserComponent } from '../update-register-user/update-register-user.component';
import { Subscription } from 'rxjs';
import { UserAuthService } from '../../../../services/auth/user-auth.service';

@Component({
  selector: 'app-register-user-view',
  templateUrl: './register-user-view.component.html',
  styleUrls: ['./register-user-view.component.scss']
})
export class RegisterUserViewComponent implements OnInit, OnDestroy {
  userData: any;
  private userDataSubscription!: Subscription;

  constructor(
    public dialogRef: MatDialogRef<RegisterUserViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userAuthService: UserAuthService,
    private dialog: MatDialog
  ) {
    this.userData = data;
  }

  ngOnInit() {
    // Subscribe to user data changes
    this.userDataSubscription = this.userAuthService.userData$.subscribe(users => {
      const updatedUser = users.find(user => user.token === this.userData.token);
      if (updatedUser) {
        this.userData = { ...updatedUser };
      }
    });
  }

  ngOnDestroy() {
    // Clean up subscription
    if (this.userDataSubscription) {
      this.userDataSubscription.unsubscribe();
    }
  }

  closeModel() {
    this.dialogRef.close();
  }

  deleteUser() {
    const confirmation = confirm(`Are you sure you want to delete ${this.userData.firstname} ${this.userData.lastname}?`);
    if (confirmation) {
      this.userAuthService.deleteUser(this.userData.token);
      this.closeModel();
    }
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(UpdateRegisterUserComponent, {
      width: '600px',
      data: this.userData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userData = { ...result }; // Update local data immediately
      }
    });
  }
}