import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { JobService } from '../../../services/jobs/job.service';

@Component({
  selector: 'app-editjob',
  templateUrl: './editjob.component.html',
  styleUrls: ['./editjob.component.scss']
})
export class EditjobComponent implements OnInit {
  jobForm!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditjobComponent>,
    @Inject(MAT_DIALOG_DATA) public jobData: any,
    private toastr: ToastrService,
    private jobS: JobService
  ) {}

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      companyName: [this.jobData?.companyName || '', [Validators.required, Validators.maxLength(50)]],
      jobTitle: [this.jobData?.jobTitle || '', [Validators.required, Validators.maxLength(50)]],
      jobLocation: [this.jobData?.jobLocation || '', Validators.required],
      employmentType: [this.jobData?.employmentType || '', Validators.required],
      jobDescription: [this.jobData?.jobDescription || '', [Validators.required, Validators.minLength(10)]],
      applicationMethod: [this.jobData?.applicationMethod || '', Validators.required],
      notificationEmail: [this.jobData?.notificationEmail || '', [Validators.required, Validators.email]],
      isAuthorizedToWork: [this.jobData?.isAuthorizedToWork || false],
      requiresSponsorship: [this.jobData?.requiresSponsorship || false],
      referralSource: [this.jobData?.referralSource || ''],
      isActive: new FormControl(false, [Validators.requiredTrue]),
      
    });
  }


  onSave(): void {
    if (this.jobForm.invalid) {
      this.jobForm.markAllAsTouched();
      this.toastr.error('Please fill all required fields correctly.', 'Error');
      return;
    }

    this.isSubmitting = true;

    setTimeout(() => {
      const updateJobData = this.jobForm.value;

      this.jobS.updateJobDetail(this.jobData.id, updateJobData).subscribe(
        () => {
          this.toastr.success('Job updated successfully!', 'Success');
          this.isSubmitting = false;
          this.dialogRef.close(true);
        },
        (error) => {
          console.error('Error updating job:', error);
          this.toastr.error('Failed to update job. Please try again.', 'Error');
          this.isSubmitting = false;
        }
      );
    }, 1500);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
