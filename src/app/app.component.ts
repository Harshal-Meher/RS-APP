import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'opensourceappnew';

  showSidebar: boolean = false;
  showNavbar: boolean = true;

  constructor(private ngxservice: NgxUiLoaderService, private router: Router) {
    this.ngxservice.start();
    setTimeout(() => {
      this.ngxservice.stop();
    }, 3000);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => 
      {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url;

        if (currentUrl.includes('/useradmin/login')) {
          // Hide navbar and sidebar on login page
          this.showNavbar = false;
          this.showSidebar = false;
        } 
        else if (currentUrl.startsWith('/useradmin/mainpanel')) {
          // Show sidebar, hide navbar on main panel
          this.showSidebar = true;
          this.showNavbar = false;
        } 
        else {
          // Default: Show navbar, hide sidebar
          this.showSidebar = false;
          this.showNavbar = true;
        }
      }
    });
  }

  
}
