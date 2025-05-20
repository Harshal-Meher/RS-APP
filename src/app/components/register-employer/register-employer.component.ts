import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-employer',
  standalone: false,
  templateUrl: './register-employer.component.html',
  styleUrl: './register-employer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterEmployerComponent {
  readonly panelOpenState = signal(false);
  registrationForm!: FormGroup;


  completeForm:any;

  constructor(private fb: FormBuilder, private toaster:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z].*')
      ]),
      confirmpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z].*'),
        this.matchPassword.bind(this)
      ]),
      industryType: ['', Validators.required],
      companyType: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      contactPerson: ['', Validators.required],
      termsAndConditions: [false, Validators.requiredTrue],
      receivePromotions: [false],
  });

    }

    matchPassword(control: FormControl): { [s: string]: boolean } | null {
      if (this.registrationForm && control.value !== this.registrationForm.controls['password'].value) {
        return { passwordMismatch: true };
      }
      return null;
    }
  onSubmit(): void {
    if (this.registrationForm.valid) {
      const local= localStorage.getItem("userRegistration");
      if(local != null){
        const employers= JSON.parse(local);
        employers.push(this.registrationForm.value);
        localStorage.setItem("userDetails",JSON.stringify(employers));
        this.toaster.success("Employer added");
        this.router.navigate(['']);
      }else{
        const employers=[];
        employers.push(this.registrationForm.value);
        localStorage.setItem("userDetails",JSON.stringify(employers));
        this.toaster.success("Employer added");
        this.router.navigate(['']);
      }

    } else {

      this.registrationForm.markAllAsTouched();
    }
  }

  onReset(): void {
    this.registrationForm.reset();
    this.toaster.error("Filled  it proper...");
  }
}