// courses.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CoursesService } from '../../services/courses/course.service';

export interface Course {
  course_id: string | number;
  course_name: string;
  description: string;
  price: number;
  duration: string;
  rating: number;
  certification: string;
}
@Component({
  selector: 'app-courses',
  templateUrl:'./courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {

  @Output() courseSelected = new EventEmitter<any>();

  courses: Course[] = [];
  courseDisplay: boolean = false;

  constructor(private router: Router, private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

goToCourseDetails(course: any) {
  this.router.navigate(['/courses/courses-details', course.course_id]);
}
}
