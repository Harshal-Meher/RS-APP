import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { RegisterUserViewComponent } from '../register-user-view/register-user-view.component';
import { AdminAuthService } from '../../../../services/auth/admin-auth.service';
import { UserAuthService } from '../../../../services/auth/user-auth.service';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.scss']
})
export class ActivateUserComponent {
  activeUserEmail: string = 'Not Available';
  totalUserCount: number = 0;              
  activeUserCount: number = 0;
  activeUsers: any[] = []; 

  constructor(
    public authService: AdminAuthService,
    private userAuthService: UserAuthService,
    private toastMsg: ToastrService,
    private dialog: MatDialog
  ) {
    this.getActiveUsers();
  }

  getActiveUsers() {
    try {
      const activeUsersEmails = this.userAuthService.getActiveUsersEmails();
      const allUsers = this.userAuthService.getUserData() || [];

      // Filter active users
      this.activeUsers = allUsers.filter(user => activeUsersEmails.includes(user.email));
      this.activeUserCount = this.activeUsers.length;
      this.totalUserCount = allUsers.length;

      this.activeUserEmail = this.activeUsers.length > 0 ? this.activeUsers[0].email : 'Not Available';
    } 
    catch (error) {
      console.error('Error fetching active users:', error);
      this.toastMsg.error('Failed to load active users.');
    }
  }

  openDialogBox(user: any) {
    this.dialog.open(RegisterUserViewComponent, {
      width: '500px',
      data: user
    });
  }
}
