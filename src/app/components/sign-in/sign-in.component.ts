import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserAuthService } from '../../services/auth/user-auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  isLoading: boolean = false;
  private deactivationSub: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userAuthService: UserAuthService,
    private toast:ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.deactivationSub = this.userAuthService.accountDeactivation$.subscribe(token => {
      if (token && token === this.userAuthService.getToken()) {
        setTimeout(() => {
          this.toast.error('Your account has been deactivated by an admin!', 'Account Deactivated', {
            timeOut: 5000
          });
          this.router.navigate(['/sign-in']);
        }, 10000); 
      }
    });
  }

  ngOnDestroy(): void {
    if (this.deactivationSub) {
      this.deactivationSub.unsubscribe();
    }
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    setTimeout(() => {
      const { email, password } = this.loginForm.value;
      const userData = this.userAuthService.getUserData();
      const user = userData ? userData.find(u => u.email === email && u.password === password) : null;

      if (user) {
        if (user.isActive) {
          if (this.userAuthService.loginUser(email, password)) {
            this.toast.success('Login Successful!', '', { timeOut: 3000 });
            this.router.navigate(['/']);
          } else {
            this.isLoading = false;
            this.toast.error('Login failed. Please try again.', '', { timeOut: 3000 });
          }
        } else {
          this.isLoading = false;
          this.toast.error('Your account is deactivated!', '', { timeOut: 3000 });
          this.handleInactiveAccount(user, email);
        }
      } else {
        this.isLoading = false;
        this.toast.error('Invalid credentials!', '', { timeOut: 3000 });
      }
    }, 2000);
  }

  private handleInactiveAccount(user: any, email: string): void {
    if (!user.activationRequested) {
      if (confirm('Your account is inactive. Would you like to send an activation request to the admin?')) {
        this.userAuthService.requestActivation(email);
        this.toast.success('Activation request sent to admin!', '', { timeOut: 3000 });
      }
    } else {
      this.toast.info('Activation request already sent to admin!', '', { timeOut: 3000 });
    }
  }
}