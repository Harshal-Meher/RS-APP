import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../../../../services/auth/admin-auth.service';
import { UserAuthService } from '../../../../services/auth/user-auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from '../../../services/courses/course.service';
import { CandidateService } from '../../../services/candidates/candidate.service';
import { AdminLoginModelComponent } from '../admin-login-model/admin-login-model.component';
import { AddCourseComponent } from '../../../modules/courses/add-course/add-course.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoggingOut = false; 
  userCount: number = 0;
  userLogin: number = 0;
  
  courseLength: number = 0;
  crashCourseCount: number = 0;
  professionalCourseCount: number = 0;
  premiumCandidatesCount: number = 0;

  allCourses: any[] = [];
  crashCourses: any[] = [];
  professionalCourses: any[] = [];
  allCandidates: any[] = [];


  candidatesCounts:number = 0;
  constructor(
    public authService: AdminAuthService,
    private userAuthService: UserAuthService, 
    private dialog: MatDialog,
    private toastMsg: ToastrService,
    private coursesService: CourseService,
    private candidateS:CandidateService
  ) {}

  ngOnInit() {
    this.checkAdminLoginStatus();
    this.getUserCount();
    this.getActiveUserCount();
    this.loadCourses();
    this.candidatesCount(); 
    this.getPremiumCandidates();
  }

  checkAdminLoginStatus() {
    const interval = setInterval(() => {
      if (!this.authService.isLoggedIn()) {
        // this.toastMsg.info('Login Please....', '', {});
      } else {
        clearInterval(interval);
      }
    }, 10000);
  }

  loadCourses() {
    this.coursesService.getCourses().subscribe(
      (courses) => {
        this.allCourses = courses;
        this.courseLength = courses.length;
        this.crashCourses = courses.filter((course) => course.courseTypeId === 'Crash Course');
        this.professionalCourses = courses.filter((course) => course.courseTypeId === 'Professional Course');

        this.crashCourseCount = this.crashCourses.length;
        this.professionalCourseCount = this.professionalCourses.length;
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  getActiveUserCount() {
    try {
      this.userLogin = this.userAuthService.getActiveUsersCount();
    } catch (error) {
      console.error('Error fetching active users:', error);
      this.toastMsg.error('Failed to load active users count.');
    }
  }

  getUserEmailAndCount() {
    try {
      const user = this.userAuthService.getActiveUsersEmails();
      const email = user && user.length > 0 ? user[0] : 'Not Available';
      const users = this.userAuthService.getUserData();
      const count = users ? users.length : 0;
      return { email, count };
    }
     catch (error) {
      console.error('Error fetching user email and count:', error);
      this.toastMsg.error('Failed to load user email and count.');
      return { email: 'Not Available', count: 0 };
    }
  }


  getUserCount() {
    try {
      const users = this.userAuthService.getUserData();
      this.userCount = users ? users.length : 0;
    } catch (error) {
      console.error('Error fetching user count:', error);
      this.toastMsg.error('Failed to load user count.');
    }
  }

  getUserEmail(): string {
    return this.authService.getLoggedInUser()?.email || 'Not Available';
  }

  openAdminLoginDialog(): void {
    this.dialog.open(AdminLoginModelComponent, {
      width: '600px',
      data: { isAdmin: true },
    });
  }

  logout() {
    this.isLoggingOut = true;
    setTimeout(() => {
      this.isLoggingOut = false;
      this.authService.logout();
    }, 3000);
    this.toastMsg.success('Logout successful!', '', {
      positionClass: 'toast-top-center',
    });
  }

   openAddCourseDialog() {
    const dialogRef = this.dialog.open(AddCourseComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadCourses(); 
    });
  }

  candidatesCount() {
    this.candidateS.getCandidateDetails().subscribe(
      (res) => {
        this.allCandidates = res;
        this.candidatesCounts = res.length;
      },
      (error) => {
        console.error('Error fetching candidates:', error);
        this.toastMsg.error('Failed to load candidate count.');
      }
    );
  }

  getPremiumCandidates() {
    this.candidateS.getPremiumCandidateDetails().subscribe(
      (res) => {
        this.premiumCandidatesCount = res.length;
      },
      (error) => {
        console.error('Error fetching premium candidates:', error);
        this.toastMsg.error('Failed to load premium candidates.');
      }
    );
  }
  
}
