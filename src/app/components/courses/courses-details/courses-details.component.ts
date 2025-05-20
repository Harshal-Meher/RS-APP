import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../../../services/courses/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss'],
})
export class CoursesDetailsComponent  implements OnInit {

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  courseId: string | null = null;
  course: any;

  summaryPart:any;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.countLoader()
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('id');
      if (this.courseId) {
        this.loadCourseDetails(this.courseId);
      }
    });
  }

  loadCourseDetails(id: string): void {
    this.course = this.coursesService.getCourseById(id);
    this.summaryPart=this.course.summary
    console.log("hello"+ this.summaryPart );
    if (!this.course) {
      console.warn(`Course with ID ${id} not found.`);
    }
  }

  countLoader() {
    const counters: NodeListOf<Element> = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        let count: number = 0;
        const target: number = parseInt(counter.textContent || '0', 10); // Ensure a number, handle null
        const duration: number = 1000;
        const interval: number = duration / target;

        function updateCounter(): void {
            count++;
            counter.textContent = count.toString();
            if (count < target) {
                setTimeout(updateCounter, interval);
            }
        }
        setTimeout(updateCounter, 100);
    });
};
}
