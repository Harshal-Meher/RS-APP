import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrer',
  templateUrl:'./carrer.component.html',
  styleUrl: './carrer.component.scss'
})
export class CarrerComponent {
constructor(private router: Router) {}

  navigateToContact() {
    this.router.navigateByUrl('/employer/register-employer');
  }

  navigateToCourses() {
    this.router.navigate(['contact-us']);
  }
}
