import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ProfileEditComponent } from '../profile-edit/profile-edit.component';
export interface User {
  isActive: boolean;
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  gender: string;
  dob: string;
  area: string;
  city: string;
  state: string;
  country: string;
  branchname: string;
  batchtime: string;
  enquirydetail: string;
  status: string;
  token: string;
  profileCompletion?: number; // Ensuring it is optional
}

@Component({
  selector: 'app-profile-complete',
  templateUrl: './profile-complete.component.html',
  styleUrls: ['./profile-complete.component.scss']
})
export class ProfileCompleteComponent implements OnInit {
  profileView: User[] = [];

  profilePerformance = {
    searchAppearances: 35,
    recruiterActions: 9
  };

  constructor(
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getProfileDetail();
  }

  getProfileDetail(): void {
    const storedData = localStorage.getItem('userRegistrations');
    const activeUsers = JSON.parse(localStorage.getItem('activeUsers') || '[]');

    if (storedData) {
      const parsedData: User[] = JSON.parse(storedData);
      this.profileView = parsedData
        .filter((user: User) => activeUsers.includes(user.token))
        .map(user => ({
          ...user,
          profileCompletion: user.profileCompletion ?? 85 // Default to 85 if missing
        }));
    } else {
      this.toastr.warning('No user data found in localStorage');
    }
  }

  editProfile(user: User): void {
    const dialogRef = this.dialog.open(ProfileEditComponent, {
      width: '700px',
      height: 'auto',
      data: { user },
      panelClass: 'custom-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getProfileDetail();
        this.toastr.success('Profile updated successfully!');
      }
    });
  }
}
