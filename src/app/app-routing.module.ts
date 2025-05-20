import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterEmployerComponent } from './components/register-employer/register-employer.component';
import { JobsComponent } from './components/job/job.component';
import { AboutComponent } from './components/about/about.component';
import { authGuard } from './guards/auth.guard';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesDetailsComponent } from './components/courses/courses-details/courses-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PackagesComponent } from './components/packages/packages.component';
import { IndustryComponent } from './components/industry/industry.component';
import { IndustryInfoComponent } from './components/industry/industry-info/industry-info.component';
import { CarrerComponent } from './components/carrer/carrer.component';
import { CrashCourseComponent } from './components/courses/crash-course/crash-course.component';
import { ProfessionalCourseComponent } from './components/courses/professional-course/professional-course.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'courses',
    children: [
      {
        path: 'courses-list',
        component: CoursesComponent,
        canActivate: [authGuard],
      },
      {
        path: 'courses-details/:id',
        component: CoursesDetailsComponent,
        canActivate: [authGuard],
      },
      {
        path: 'crash-course',
        component:CrashCourseComponent,
        canActivate: [authGuard],
      },
      {
        path:'professional-course',
        component:ProfessionalCourseComponent,
        canActivate: [authGuard],
      }
    ],
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./components/contact-us/contact-us.component').then(
        (m) => m.ContactUsComponent
      ),
  },
  {
    path: 'employer',
    children: [
      {
        path: 'register-employer',
        component: RegisterEmployerComponent,
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: 'career',
    component:CarrerComponent,
    canActivate: [authGuard],
  },
  {
    path: 'jobs',
    children: [
      {
        path: 'job-profile',
        component: JobsComponent,
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: 'profile',
    component:ProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'packages',
    component:PackagesComponent
  },
  {
    path:"industry",
    component:IndustryComponent
  },
    { 
      path: 'industry-info/:name', 
      component: IndustryInfoComponent 
    },

  {
    path: 'auth',
    children: [
      {
        path: 'signUp',
        component: SignUpComponent,
      },
      {
        path: 'signIn',
        component: SignInComponent,
      },
    ],
  },
  { 
    path: 'useradmin',
    loadChildren: () => import('./useradmin/useradmin.module').then(m => m.UseradminModule)
  },
    { 
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
