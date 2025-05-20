import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { MainpanelComponent } from './mainpanel/mainpanel.component';
import { AddCourseComponent } from './modules/courses/add-course/add-course.component';
import { adminAuthGuard } from '../guards/admin-auth.guard';
import { RegisterUserComponent } from './mainpanel/components/register-user/register-user.component';
import { ActivateUserComponent } from './mainpanel/components/activate-user/activate-user.component';
import { InterviewedCandidateComponent } from './mainpanel/components/interviewed-candidate/interviewed-candidate.component';
import { SendNotificationsComponent } from './mainpanel/components/send-notifications/send-notifications.component';
import { AllCoursesComponent } from './mainpanel/components/all-courses/all-courses.component';
import { AdminLoginModelComponent } from './mainpanel/components/admin-login-model/admin-login-model.component';
import { SidebarComponent } from './mainpanel/sidebar/sidebar.component';

const routes: Routes = [
{
    path:'',
    redirectTo : 'login',
    pathMatch: 'full',
  },
  {
    path:'login',
    component:AdminLoginModelComponent,
    data: { title: 'Login' },
  },
  {
    path:'mainpanel',
    component: HomeComponent,

  },
  {
    path:'mainpanel/home',
    component:HomeComponent,
  },
  {
    path:'mainpanel/allCourses',
    component:AllCoursesComponent,
    canActivate:[adminAuthGuard]

  },
  {
    path:'mainpanel/send-notification',
    component:SendNotificationsComponent,
    canActivate:[adminAuthGuard]
    
  },
  { 
    path: 'courses',
    loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule),
  },
  {
    path: 'candidates',
    loadChildren: () => import('./modules/candidates/candidates.module').then(m => m.CandidatesModule)
  },
  {
    path: 'packages',
    loadChildren: () => import('./modules/packages/packages.module').then(m => m.PackagesModule)
  },
    {
    path: 'jobs',
    loadChildren: () => import('./modules/jobs/jobs.module').then(m => m.JobsModule)
  },
  {
    path: '',
    component: MainpanelComponent,
    children: [
      {
        path: 'add-course',
        component: AddCourseComponent,
        canActivate:[adminAuthGuard]

      }
    ]
    },
    {
      path:'mainpanel/UserView',
      component:RegisterUserComponent,
      canActivate:[adminAuthGuard]

    },
    {
      path:'mainpanel/activate-user',
      component:ActivateUserComponent,
     canActivate:[adminAuthGuard]

    },
{
  path: 'mainpanel/intervied/:id',
  component: InterviewedCandidateComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UseradminRoutingModule { }
