import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateService } from '../../../services/candidates/candidate.service';

@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.scss'],
})
export class AddcandidateComponent implements OnInit {
  frmCandidates!: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;

  constructor(
    private candidateService: CandidateService,
    private router: Router,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.frmCandidates = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z0-9_]+$/),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z].*'),
      ]),
      confirmpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z].*'),
        this.matchPassword.bind(this),
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
      mobileNo: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ]),
      branchName: new FormControl('', Validators.required),
      batchTime: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      terms: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  matchPassword(control: FormControl): { [s: string]: boolean } | null {
    if (
      this.frmCandidates &&
      control.value !== this.frmCandidates.controls['password'].value
    ) {
      return { passwordMismatch: true };
    }
    return null;
  }

  addCandidates() {
    if (this.frmCandidates.invalid) {
      console.error('Form is incomplete or invalid.');
      return;
    }

    const candidateData = this.frmCandidates.value;

    this.candidateService.addCandidateDetails(candidateData).subscribe(
      (res) => {
        this.isSubmitting = true;
        this.toast.success(
          'Data added successfully! Redirecting in a moment...',
          'Success ♥️'
        );
        setTimeout(() => {
          this.router.navigate([
            '/useradmin/mainpanel/candidates/view-candidate',
          ]);
          this.isSubmitting = false;
        }, 2000);
      },
      (error) => {
        console.error('Error occurred while adding candidate:', error);
      }
    );
  }

  addEducationalDetails() {
    if (this.frmCandidates.invalid) {
      console.error('Form is incomplete or invalid.');
      return;
    }

    const educationalData = this.frmCandidates.value;

    this.candidateService.addEducationaldetails(educationalData).subscribe(
      (res) => {
        this.isSubmitting = true;
        this.toast.success(
          'Data added successfully! Redirecting in a moment...',
          'Success ♥️'
        );
        setTimeout(() => {
          this.router.navigate([
            '/useradmin/mainpanel/candidates/view-candidate',
          ]);
          this.isSubmitting = false;
        }, 2000);
      },
      (error) => {
        console.error('Error occurred while adding candidate:', error);
      }
    );
  }

  addProfessionalDetails() {
    if (this.frmCandidates.invalid) {
      console.error('Form is incomplete or invalid.');
      return;
    }

    const professionalData = this.frmCandidates.value;

    this.candidateService.addEducationaldetails(professionalData).subscribe(
      (res) => {
        this.isSubmitting = true;
        this.toast.success(
          'Data added successfully! Redirecting in a moment...',
          'Success ♥️'
        );
        setTimeout(() => {
          this.router.navigate([
            '/useradmin/mainpanel/candidates/view-candidate',
          ]);
          this.isSubmitting = false;
        }, 2000);
      },
      (error) => {
        console.error('Error occurred while adding candidate:', error);
      }
    );
  }
}
