import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterCoursesService } from '../../../services/courses/filter-courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional-course',
  templateUrl: './professional-course.component.html',
  styleUrl: './professional-course.component.scss'
})
export class ProfessionalCourseComponent {
  coursesData: any[] = [];
   filteredCourses: any[] = [];
   activeTab: string = 'all';
 
   constructor(
     private coursesService: FilterCoursesService,
     private dialog: MatDialog,
     private router: Router
   ) {
     this.loadCourses();
   }
 
   loadCourses() {
     this.coursesService.getProfessionalCourses().subscribe((data) => {
       this.coursesData = data;
     });
     
   }
 
  goToCourseDetails(course: any) {
  this.router.navigate(['/courses/courses-details', course.course_id]);
  }


 }
 