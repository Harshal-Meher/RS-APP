import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../profile-complete/profile-complete.component';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  currentUser: User;
  profileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProfileEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User }
  ) {
    this.currentUser = { ...data.user };
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstname: [this.currentUser.firstname || '', Validators.required],
      lastname: [this.currentUser.lastname || '', Validators.required],
      email: [this.currentUser.email || '', [Validators.required, Validators.email]],
      mobile: [this.currentUser.mobile || '', [Validators.pattern(/^\d{10}$/)]],
      gender: [this.currentUser.gender || ''],
      dob: [this.currentUser.dob || ''],
      area: [this.currentUser.area || ''],
      city: [this.currentUser.city || ''],
      state: [this.currentUser.state || ''],
      country: [this.currentUser.country || ''],
      branchname: [this.currentUser.branchname || ''],
      batchtime: [this.currentUser.batchtime || ''],
      enquirydetail: [this.currentUser.enquirydetail || ''],
      isActive: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  saveProfile(): void {
    if (this.profileForm.valid) {
      const updatedUser: User = { ...this.currentUser, ...this.profileForm.value };
      const storedData = localStorage.getItem('userRegistrations');
      if (storedData) {
        let registrations: User[] = JSON.parse(storedData);
        const index = registrations.findIndex(user => user.token === this.currentUser.token);

        if (index !== -1) {
          registrations[index] = updatedUser;
          localStorage.setItem('userRegistrations', JSON.stringify(registrations));
          this.dialogRef.close(true); 
        }
      }
    }
  }

  cancel(): void {
    this.dialogRef.close(); 
  }
}
