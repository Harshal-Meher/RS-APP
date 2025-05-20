import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesDetailsComponent } from './components/courses/courses-details/courses-details.component';
import { PasswordMatchDirective } from './utils/password-match.directive';
import { ScrollToTopDirective } from './utils/scroll-to-top.directive';
import { RegisterEmployerComponent } from './components/register-employer/register-employer.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { FilterComponent } from './common/filter/filter.component';
import { HeaderComponent } from './common/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileCompleteComponent } from './components/profile/profile-complete/profile-complete.component';
import { ProfileIncompleteComponent } from './components/profile/profile-incomplete/profile-incomplete.component';
import { ProfileRecommendationsComponent } from './components/profile/profile-recommendations/profile-recommendations.component';
import { JobsComponent } from './components/job/job.component';
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { LogosSliderComponent } from './components/logos-slider/logos-slider.component';
import { IndustryComponent } from './components/industry/industry.component';
import { IndustryInfoComponent } from './components/industry/industry-info/industry-info.component';
import { CarrerComponent } from './components/carrer/carrer.component';
import { SubFooterComponent } from './components/sub-footer/sub-footer.component';
import { ProfessionalCourseComponent } from './components/courses/professional-course/professional-course.component';
import { CrashCourseComponent } from './components/courses/crash-course/crash-course.component';
import { UseradminModule } from "./useradmin/useradmin.module";
import { RouterOutlet } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NotificationService } from './services/notification/notification.service';
import { provideAnimations } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CoursesDetailsComponent,
    PasswordMatchDirective,
    ScrollToTopDirective,
    RegisterEmployerComponent,
    SignUpComponent,
    SignInComponent,
    NavbarComponent,
    FooterComponent,
    FilterComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileCompleteComponent,
    ProfileIncompleteComponent,
    ProfileRecommendationsComponent,
    JobsComponent,
    ProfileEditComponent,
    AboutComponent,
    BlogsComponent,
    LogosSliderComponent,
    IndustryComponent,
    IndustryInfoComponent,
    CarrerComponent,
    SubFooterComponent,
    ProfessionalCourseComponent,
    CrashCourseComponent,
    PagenotfoundComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxLoadingModule,
    MaterialModule,
    ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
    }),
    HttpClientModule,
    UseradminModule,
    RouterOutlet
],
  exports:[
    MaterialModule,
    FooterComponent,
  ],
  providers: [
    provideClientHydration(),
    provideAnimations(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    NotificationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
