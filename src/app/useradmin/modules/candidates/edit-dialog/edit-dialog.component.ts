import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CandidateService } from '../../../services/candidates/candidate.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  frmCandidates!: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;
terms: any;

  constructor(
    private candidateService: CandidateService,
    private router: Router,
    private toast: ToastrService,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any  
  ) {}

  ngOnInit(): void {
    this.frmCandidates = new FormGroup({
      id: new FormControl(this.data?.id || ''),
      username: new FormControl(this.data?.username || '', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z0-9_]+$/),
      ]),
      email: new FormControl(this.data?.email || '', [Validators.required, Validators.email]),
      password: new FormControl(this.data?.password ||'', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z].*'),
      ]),
      confirmpassword: new FormControl(this.data?.confirmpassword ||'', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z].*'),
        this.matchPassword.bind(this),
      ]),
      firstName: new FormControl(this.data?.firstName || '', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
      lastName: new FormControl(this.data?.lastName || '', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
      mobileNo: new FormControl(this.data?.mobileNo || '', [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ]),
      branchName: new FormControl(this.data?.branchName || '', Validators.required),
      batchTime: new FormControl(this.data?.batchTime || '', Validators.required),
      country: new FormControl(this.data?.country || '', Validators.required),
      state: new FormControl(this.data?.state || '', Validators.required),
      city: new FormControl(this.data?.city || '', Validators.required),
      address: new FormControl(this.data?.address || '', Validators.required),
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

  editCandidates() {
    if (this.frmCandidates.invalid) {
      console.error('Form is incomplete or invalid.');
      return;
    }

    const candidateData = this.frmCandidates.value;

    this.candidateService.updateCandidateDetail(candidateData.id, candidateData).subscribe(
      (res) => {
        this.isSubmitting = true;
        this.toast.success(
          'Update Data successfully',
          'Success ✅'
        );
        setTimeout(() => {
          this.dialogRef.close(true);
          this.router.navigate(['/useradmin/mainpanel/candidates/view-candidate']);
          this.isSubmitting = false;
        }, 2000);
      },
      (error) => {
        console.error('Error occurred while adding candidate:', error);
      }
    );
  }
}
