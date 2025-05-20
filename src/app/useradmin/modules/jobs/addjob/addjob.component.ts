import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobService } from '../../../services/jobs/job.service';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrl: './addjob.component.scss'
})
export class AddjobComponent {
  jobForm!: FormGroup;

  isSubmitting = false;
  showSuccessMessage = false;

  constructor(private jobService: JobService,private router :Router,private toastMsg:ToastrService) {}

  ngOnInit(): void {
    this.jobForm = new FormGroup({
      companyName: new FormControl('', [Validators.required]),
      jobTitle: new FormControl('', [Validators.required]),
      jobLocation: new FormControl('', [Validators.required]),
      employmentType: new FormControl('', [Validators.required]),
      jobDescription: new FormControl('', [Validators.required]),
      applicationMethod: new FormControl('', [Validators.required]),
      notificationEmail: new FormControl('', [Validators.required]),
      isAuthorizedToWork: new FormControl('', [Validators.required]),
      requiresSponsorship: new FormControl('', [Validators.required]),
      referralSource: new FormControl('', [Validators.required]),
      isActive: new FormControl(false, [Validators.requiredTrue]),

    });
  }

  addJob(): void {

    if (this.jobForm.invalid) {
      this.toastMsg.error('Form is invalid. Please fill all required fields correctly.');
      return;
    }

    const jobData = this.jobForm.value;

    this.isSubmitting = true;

    this.jobService.addJob(jobData).subscribe(
      () => {
        setTimeout(() => {
          this.toastMsg.success('Company Data Added Successfully:');
          this.router.navigate(['useradmin/mainpanel/jobs/view-job']);
          this.isSubmitting = false;
        }, 3000); 
      }
    );
  }
}
