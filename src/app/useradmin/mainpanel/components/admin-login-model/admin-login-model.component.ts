import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminAuthService } from '../../../../services/auth/admin-auth.service';

@Component({
  selector: 'app-admin-login-model',
  templateUrl: './admin-login-model.component.html',
  styleUrls: ['./admin-login-model.component.scss'], 
})
export class AdminLoginModelComponent implements OnInit {  
  isLoading = false;
  signIn!: FormGroup;
  submitted = false;
  hide = true;
  isAdmin: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AdminAuthService,
    public dialogRef: MatDialogRef<AdminLoginModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isAdmin = data.isAdmin || false;
  }

  ngOnInit() {
    this.initializeForm();
    this.addDefaultAdminUser();
  }

  private initializeForm() {
    this.signIn = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.signIn.invalid) {
      this.toastr.error('Please enter a valid email and password', 'Error', {
        positionClass: 'toast-bottom-right', 
      });
      return;
    }

    this.isLoading = true;
    const { email, password } = this.signIn.value;

    setTimeout(() => {
      this.login(email, password);
    }, 3000); 
  }

  login(email: string, password: string) {
    const user = this.authService.authenticateUser(email, password, this.isAdmin);

    if (user) {
      this.authService.setLoggedInUser(user);
      this.toastr.success('Login successful!', 'Success', {
        positionClass: 'toast-top-right',
      });
      this.isLoading = false;
      this.dialogRef.close();
      this.router.navigateByUrl(this.isAdmin ? 'useradmin/mainpanel/home' : 'useradmin/mainpanel/home');
    } else {
      this.isLoading = false;
      this.toastr.error('Invalid email or password', 'Error', {
        positionClass: 'toast-top-right',
      });
    }
  }

  private addDefaultAdminUser() {
    this.authService.addDefaultAdmin();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
