import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { EditcourseComponent } from './editcourse/editcourse.component';


@NgModule({
  declarations: [
    AddCourseComponent,
    ViewCourseComponent,
    EditcourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,

  ]
})
export class CoursesModule { }
