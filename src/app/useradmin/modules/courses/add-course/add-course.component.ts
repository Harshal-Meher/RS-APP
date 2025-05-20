import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../../services/courses/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent {
 frmMainCourse!: FormGroup;
  isSubmitting = false;
  courseDetail: any[] = [];

  constructor(
    private mainCourseService:CourseService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.mainCourseService.getCourses().subscribe(
      (data) => {
        this.courseDetail = data;
        console.log('Course Data:', data);
      },
      (error) => {
        console.error('Error fetching courses:', error);
        this.toastr.error('Failed to fetch course details.', 'Error');
      }
    );

    this.frmMainCourse = new FormGroup({
      courseTypeId: new FormControl('', Validators.required),
      courseSubTypeId: new FormControl('', Validators.required),
      courseName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9 ]+$/),
      ]),
      courceDescribtion: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(5000),
        Validators.pattern(/^[\s\S]*$/),
      ]),
      courseLink: new FormControl('', [
        Validators.pattern(
          /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
        ),
      ]),
      coursePrice: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d+(\.\d{1,2})?$/),
      ]),
      courseDiscount: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      courseStartDate: new FormControl('', Validators.required),
      courseEndDate: new FormControl('', Validators.required),
      courseStartTime: new FormControl('', Validators.required),
      courseEndTime: new FormControl('', Validators.required),
      isActive  : new FormControl(false, [Validators.requiredTrue]),
      
    });
  }

  addCourse(): void {
    if (this.frmMainCourse.invalid) {
      this.toastr.warning(
        'Please fill in all required fields correctly.',
        'Warning'
      );
      return;
    }

    const courseData = this.frmMainCourse.value;
    this.isSubmitting = true;

    this.mainCourseService.addCourseDetail(courseData).subscribe(
      (response) => {
        console.log('Course Data Added Successfully:', response);

        this.toastr.success('Course added successfully!', 'Success');
        this.isSubmitting = true;

        setTimeout(() => {
          this.frmMainCourse.reset();
          this.router.navigate(['useradmin/mainpanel/courses/view-course']);
        }, 2000);
      },
      (error) => {
        console.error('Error while adding course:', error);
        this.toastr.error('Failed to add course. Please try again.', 'Error');
        this.isSubmitting = false;
      }
    );
  }
}
