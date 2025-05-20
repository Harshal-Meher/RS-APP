import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from '../../../../services/auth/user-auth.service';

@Component({
  selector: 'app-update-register-user',
  templateUrl: './update-register-user.component.html',
  styleUrls: ['./update-register-user.component.scss']
})
export class UpdateRegisterUserComponent implements OnInit {
  updateUserForm!: FormGroup;
  isLoading = false;
  isChecked = false; // Checkbox default false
hidePassword: any;

  constructor(
    private fb: FormBuilder,
    private userAuthService: UserAuthService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<UpdateRegisterUserComponent>,
    @Inject(MAT_DIALOG_DATA) public userData: any
  ) {}

  ngOnInit(): void {
    this.updateUserForm = this.fb.group({
      firstname: [this.userData.firstname || '', [Validators.required, Validators.minLength(2)]],
      lastname: [this.userData.lastname || '', [Validators.required, Validators.minLength(2)]],
      email: [this.userData.email || '', [Validators.required, Validators.email]],
      mobile: [this.userData.mobile || '', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      gender: [this.userData.gender || '', Validators.required],
      dob: [this.formatDate(this.userData.dob) || '', [Validators.required, this.dateValidator()]],
      area: [this.userData.area || '', Validators.required],
      city: [this.userData.city || '', Validators.required],
      state: [this.userData.state || '', Validators.required],
      country: [this.userData.country || '', Validators.required],
      branchname: [this.userData.branchname || '', Validators.required],
      batchtime: [this.userData.batchtime || '', Validators.required],
      enquirydetail: [this.userData.enquirydetail || '', [Validators.required, Validators.maxLength(500)]],
      password: [this.userData.password || '', [Validators.required, Validators.minLength(6)]],
      confirmpassword: [this.userData.password || '', Validators.required],
      isActive: new FormControl(false, [Validators.requiredTrue]),
    }, { validators: this.passwordMatchValidator });
  }
  private dateValidator() {
    return (control: any) => {
      if (!control.value) return { required: true };
      const today = new Date();
      const birthDate = new Date(control.value);
      return birthDate < today ? null : { invalidDate: true };
    };
  }

  private passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmpassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  private formatDate(date: string | Date | undefined): string {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().substring(0, 10);
  }
  async updateUser() {
    if (this.updateUserForm.valid) {
      if (confirm('Are you sure you want to update this user?')) {
        this.isLoading = true;
        try {
          const updatedUserData = { 
            ...this.userData,
            ...this.updateUserForm.value,
            token: this.userData.token,
            dob: this.convertDate(this.updateUserForm.get('dob')?.value)
          };
          
          this.userAuthService.updateUser(updatedUserData);
          this.dialogRef.close(updatedUserData);
        } catch (error) {
          this.toastr.error('Update failed. Please try again.');
        } finally {
          this.isLoading = false;
        }
      }
    } else {
      this.toastr.error('Please fill all required fields correctly');
      this.updateUserForm.markAllAsTouched();
    }
  }

  private convertDate(dateString: string): string | null {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toISOString().substring(0, 10);
  }

  closeModel() {
    this.dialogRef.close();
  }

  toggleCheckbox(event: any) {
    this.isChecked = event.checked;
  }
}
