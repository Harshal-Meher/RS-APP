import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Router } from '@angular/router';
import { CandidateService } from '../../../services/candidates/candidate.service';

@Component({
  selector: 'app-viewcandidate',
  templateUrl:'./viewcandidate.component.html',
  styleUrls: ['./viewcandidate.component.scss']
})
export class ViewcandidateComponent {
  candidateData: any[] = [];
  isLoading = false;
  deleteMsg = false;
  confirmDeleteMsg = false;
  candidateToDeleteId: number | null = null;
  isSubmitting = false;
  showSuccessMessage = false;
  searchBy: string = '';

  constructor(
    private candidate: CandidateService,
    private toastMsg: ToastrService,
    private dialog: MatDialog,
    private router: Router

  ) {
    this.getcompanyDetails();
  }


  getcompanyDetails() {
    this.isLoading = true;
    this.candidate.getCandidateDetails().subscribe(
      (data) => {
        this.candidateData = data;
        console.log('Data:', data);
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.toastMsg.error('Failed to fetch candidate details.', 'Error');
        console.error('Error fetching candidates:', error);
      }
    );
  }
  initiateInterview(candidate: any) {
    this.router.navigate(['/useradmin/mainpanel/premium-candidates/intervied', candidate.id]);
  }
  
  onDelete(id: number): void {
    this.candidateToDeleteId = id;
    this.confirmDeleteMsg = true;
  }

  confirmDelete(): void {
    if (this.candidateToDeleteId !== null) {
      this.isLoading = true;
      this.candidate.deleteCandidateData(this.candidateToDeleteId.toString()).subscribe(
        () => {
          this.confirmDeleteMsg = false;
          this.toastMsg.success('Candidate Deleted Successfully..!', 'Delete🥹');
          setTimeout(() => {
            this.getcompanyDetails();
          }, 2000);
        },
        (error) => {
          this.isLoading = false;
          this.toastMsg.error('Failed to delete candidate.', 'Error');
          console.error('Error deleting candidate:', error);
        }
      );
    }
  }

  cancelDelete(): void {
    this.confirmDeleteMsg = false;
  }

  openCourseDialog(course: any): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: course,
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getcompanyDetails();
      }
    });
  }

  onSearch(): void {
    console.log('Searching for:', this.searchBy);
  }
}
