import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateService } from '../../../services/candidates/candidate.service';

@Component({
  selector: 'app-editcandidate',
  templateUrl: './editcandidate.component.html',
  styleUrls: ['./editcandidate.component.scss']
})
export class EditcandidateComponent {
  frmCandidates: FormGroup;
  frmEducation: FormGroup;
  frmProfessional: FormGroup;
  panelOpenState = false;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private candidateService: CandidateService,
    private router: Router,
    private toast: ToastrService
  ) {
    this.frmCandidates = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dateOfBirth: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: ['']
    }, { validator: this.matchPassword });

    this.frmEducation = this.fb.group({
      qualification: ['', Validators.required],
      university: ['', Validators.required],
      major: ['', Validators.required],
      graduationYear: ['', [Validators.required, Validators.min(1900), Validators.max(2100)]],
      gpa: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      location: ['', Validators.required]
    });

    this.frmProfessional = this.fb.group({
      companyName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      yearsExperience: ['', [Validators.required, Validators.min(0)]],
      department: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      managerName: ['', Validators.required],
      employeeId: ['', Validators.required],
      workLocation: ['', Validators.required],
      companyDetails: ['', Validators.required],
      skills: ['', Validators.required],
      certifications: ['', Validators.required]
    });
  }

  matchPassword(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmpassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  addCandidates() {
    if (this.frmCandidates.invalid) {
      console.error('Form is incomplete or invalid.');
      return;
    }

    this.isSubmitting = true;
    const candidateData = this.frmCandidates.value;

    this.candidateService.addCandidateDetails(candidateData).subscribe(
      () => {
        this.toast.success('Data added successfully! Redirecting...', 'Success ♥️');
        setTimeout(() => {
          this.router.navigate(['/useradmin/mainpanel/candidates/view-candidate']);
          this.isSubmitting = false;
        }, 2000);
      },
      (error) => {
        console.error('Error occurred while adding candidate:', error);
        this.isSubmitting = false;
      }
    );
  }

  addEducationalDetails() {
    if (this.frmEducation.invalid) {
      console.error('Form is incomplete or invalid.');
      return;
    }

    this.isSubmitting = true;
    const educationalData = this.frmEducation.value;

    this.candidateService.addEducationaldetails(educationalData).subscribe(
      () => {
        this.toast.success('Education details added successfully! Redirecting...', 'Success ♥️');
        setTimeout(() => {
          this.router.navigate(['/useradmin/mainpanel/candidates/view-candidate']);
          this.isSubmitting = false;
        }, 2000);
      },
      (error) => {
        console.error('Error occurred while adding educational details:', error);
        this.isSubmitting = false;
      }
    );
  }

  addProfessionalDetails() {
    if (this.frmProfessional.invalid) {
      console.error('Form is incomplete or invalid.');
      return;
    }

    this.isSubmitting = true;
    const professionalData = this.frmProfessional.value;

    this.candidateService.addProfessionalDetails(professionalData).subscribe(
      () => {
        this.toast.success('Professional details added successfully! Redirecting...', 'Success ♥️');
        setTimeout(() => {
          this.router.navigate(['/useradmin/mainpanel/candidates/view-candidate']);
          this.isSubmitting = false;
        }, 2000);
      },
      (error) => {
        console.error('Error occurred while adding professional details:', error);
        this.isSubmitting = false;
      }
    );
  }
}
