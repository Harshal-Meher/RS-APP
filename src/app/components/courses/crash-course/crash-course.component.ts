import { Component } from '@angular/core';
import { FilterCoursesService } from '../../../services/courses/filter-courses.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crash-course',
  templateUrl: './crash-course.component.html',
  styleUrl: './crash-course.component.scss'
})
export class CrashCourseComponent {
  coursesData: any[] = [];
  filteredCourses: any[] = [];
  activeTab: string = 'all';

  constructor(
    private coursesService: FilterCoursesService,
    private router: Router
  ) {
    this.loadCourses();
  }

  loadCourses() {
    this.coursesService.getCrashCourses().subscribe((data) => {
      this.coursesData = data;
    });
  }

goToCourseDetails(course: any) {
  this.router.navigate(['/courses/courses-details', course.course_id]);
}
}
