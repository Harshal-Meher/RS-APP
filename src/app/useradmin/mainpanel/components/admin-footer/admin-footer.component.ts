import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-footer',
  templateUrl: './admin-footer.component.html',
  styleUrl: './admin-footer.component.scss'
})
export class AdminFooterComponent {
  // Footer year
  currentYear: number = new Date().getFullYear();

}
