import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../../services/profiles/profile.service';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
export interface User 
{
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
}

@Component({
  selector: 'app-profile',
  templateUrl:'./profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileView: User[] = [];
  getEmployerDetails:any[]=[];

  constructor(private dialog: MatDialog, private toastr: ToastrService,private profileEmployerS:ProfileService) {
    this.getProfileDetail();
    // this.getEmployerData();
  }
  getProfileDetail() {
    const storedData = localStorage.getItem('userRegistrations');
    const activeUsers = JSON.parse(localStorage.getItem('activeUsers') || '[]');

    if (storedData) {
      const parsedData: User[] = JSON.parse(storedData);
      this.profileView = parsedData.filter((user: User) => activeUsers.includes(user.token));
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
