import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseradminRoutingModule } from './useradmin-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { MainpanelComponent } from './mainpanel/mainpanel.component';
import { SidebarComponent } from './mainpanel/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './mainpanel/components/home/home.component';
import { AdminLoginModelComponent } from './mainpanel/components/admin-login-model/admin-login-model.component';
import { AdminHeaderComponent } from './mainpanel/components/admin-header/admin-header.component';
import { AdminFooterComponent } from './mainpanel/components/admin-footer/admin-footer.component';
import { ActivateUserComponent } from './mainpanel/components/activate-user/activate-user.component';
import { AllCoursesComponent } from './mainpanel/components/all-courses/all-courses.component';
import { ConfirmDialogComponent } from './mainpanel/components/confirm-dialog/confirm-dialog.component';
import { InterviewedCandidateComponent } from './mainpanel/components/interviewed-candidate/interviewed-candidate.component';
import { RegisterUserComponent } from './mainpanel/components/register-user/register-user.component';
import { RegisterUserViewComponent } from './mainpanel/components/register-user-view/register-user-view.component';
import { SendNotificationsComponent } from './mainpanel/components/send-notifications/send-notifications.component';
import { UpdateRegisterUserComponent } from './mainpanel/components/update-register-user/update-register-user.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CandidatePipe } from './pipes/candidate.pipe';
import { CoursesPipe } from './pipes/courses.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { EmployerPipe } from './pipes/employer.pipe';
import { JobPipe } from './pipes/job.pipe';
import { PackagePipe } from './pipes/package.pipe';
import { SkillPipe } from './pipes/skill.pipe';

@NgModule({
  declarations: [
    MainpanelComponent,
    SidebarComponent,
    HomeComponent,
    AdminLoginModelComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    ActivateUserComponent,
    AllCoursesComponent,
    ConfirmDialogComponent,
    InterviewedCandidateComponent,
    RegisterUserComponent,
    RegisterUserViewComponent,
    SendNotificationsComponent,
    UpdateRegisterUserComponent,
    CandidatePipe,
    CoursesPipe,
    FilterPipe,
    EmployerPipe,
    JobPipe,
    PackagePipe,
    SkillPipe,
  ],
  imports: [
    CommonModule,
    UseradminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RouterOutlet
  ],
  exports: [
    SidebarComponent,
    AdminHeaderComponent
  ]
})
export class UseradminModule { }
