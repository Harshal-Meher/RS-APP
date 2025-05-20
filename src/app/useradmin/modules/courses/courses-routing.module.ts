import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminAuthGuard } from '../../../guards/admin-auth.guard';
import { ViewCourseComponent } from './view-course/view-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditcourseComponent } from './editcourse/editcourse.component';

const routes: Routes = [
    {
    path: 'mainpanel/courses',
    canActivate: [adminAuthGuard], 
    children: [
      { path: 'add-course', component: AddCourseComponent },
      { path: 'view-course', component: ViewCourseComponent },
      { path: 'edit', component: EditcourseComponent }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
