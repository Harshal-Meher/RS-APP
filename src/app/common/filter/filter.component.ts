import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  message: string = '';
  activeSection: string | null = null;

  constructor(
    private notify: NotificationService,
    private toast: ToastrService,
    private router: Router
  ) {}

  notification(): void {
    this.notify.messageObservable.pipe(take(1)).subscribe((res) => {
      this.message = res;
      this.toast.info(this.message, 'Notification', { 
        closeButton: true, 
        disableTimeOut: true 
      });
    });
  }

  openPanel(section: string): void {
    this.activeSection = this.activeSection === section ? null : section;
  }
}