import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  
  isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onNoClick(): void {
    if (!this.isLoading) {
      this.dialogRef.close(false);
    }
  }

  onYesClick(): void {
    this.isLoading = true;
        setTimeout(() => {
      this.isLoading = false;
      this.dialogRef.close(true);
    }, 3000);
  }
}
