import { Component } from '@angular/core';
import { CourseService } from '../../../services/courses/course.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { EditcourseComponent } from '../editcourse/editcourse.component';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrl: './view-course.component.scss'
})
export class ViewCourseComponent {
 courseData: any[] = [];

  isLoading: boolean = false;
  deleteMsg: boolean = false;

  confirmDeleteMsg: boolean = false;
  courseToDeleteId: number | null = null;

  isSubmitting: boolean = false;
  showSuccessMessage: boolean = false;

  searchBy: any;

  constructor(private courses: CourseService, private toastr: ToastrService, private dialog: MatDialog) { 
     this.getCourseDetails();
  }

  getCourseDetails(): void {
    this.isLoading = true;
    this.courses.getCourses().subscribe(
      (data) => {
        this.courseData = data;
        this.isLoading = false;
        console.log('Data:', data);
      }
    );
  }

  onDelete(id: number): void {
    this.courseToDeleteId = id;
    this.confirmDeleteMsg = true;
  }

  confirmDelete(): void {
    if (this.courseToDeleteId !== null) {
      this.isLoading = true;
      this.courses.deleteCourseData(this.courseToDeleteId).subscribe(() => {
        this.confirmDeleteMsg = false;
        this.toastr.success('Course deleted successfully.', 'Success');

        setTimeout(() => {
          this.deleteMsg = false;
          this.getCourseDetails();
        }, 2000);
      });
    }
  }

  cancelDelete(): void {
    this.confirmDeleteMsg = false;
  }

  openCourseDialog(course: any): void {
    const dialogRef = this.dialog.open(EditcourseComponent, {
      data: course,
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getCourseDetails();
      }
    });
  }
}
