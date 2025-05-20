import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from '../../../services/courses/course.service';
import { EditcourseComponent } from '../../../modules/courses/editcourse/editcourse.component';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss'],
})
export class AllCoursesComponent implements OnInit {
  allCourses: any[] = [];
  crashCourses: any[] = [];
  professionalCourses: any[] = [];
  courseData: any[] = [];

  isLoading: boolean = false;
  deleteMsg: boolean = false;
  confirmDeleteMsg: boolean = false;
  courseToDeleteId: number | null = null;
  searchBy: any;

  courseTypes: any[] = [];
  courseSummary: any[] = [];

  constructor(
    private coursesService: CourseService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCourseDetails();
  }

  getCourseDetails(): void {
    this.isLoading = true;

    this.coursesService.getCourses().subscribe(
      (data) => {
        this.courseData = data;
        this.allCourses = data;
        this.categorizeCourses();
        this.updateCourseSummary();
        this.isLoading = false;
        console.log('Data:', data);
      },
      (error) => {
        this.isLoading = false;
        console.error('Error fetching all courses:', error);
      }
    );
  }

  categorizeCourses() {
    this.crashCourses = this.allCourses.filter(course => course.courseTypeId === 'Crash Course');
    this.professionalCourses = this.allCourses.filter(course => course.courseTypeId === 'Professional Course');
    this.updateCourseTypes();
  }

  updateCourseTypes() {
    this.courseTypes = [
      { title: 'Crash Courses', data: this.crashCourses },
      { title: 'Professional Courses', data: this.professionalCourses }
    ];
  }

  updateCourseSummary() {
    this.courseSummary = [
      { category: 'All Courses', count: this.allCourses.length },
      { category: 'Crash Courses', count: this.crashCourses.length },
      { category: 'Professional Courses', count: this.professionalCourses.length }
    ];
  }

  onDelete(id: number): void {
    this.courseToDeleteId = id;
    this.confirmDeleteMsg = true;
  }

  confirmDelete(): void {
    if (this.courseToDeleteId !== null) {
      this.isLoading = true;
      this.coursesService.deleteCourseData(this.courseToDeleteId).subscribe(() => {
        this.confirmDeleteMsg = false;
        this.toastr.success('Course deleted successfully.', 'Success');
        this.getCourseDetails();
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
