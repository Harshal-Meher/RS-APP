import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  message: string = '';
  isMessage: boolean = false;

  @ViewChild('heroCarousel') carouselRef!: ElementRef<HTMLElement>;

  constructor(
    private notify: NotificationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.notify.messageObservable.subscribe((res: string) => {
      this.message = res;
      this.isMessage = true;
    });
  }

  ngAfterViewInit(): void {
    this.initializeCarousel();
  }

  private initializeCarousel(): void {
    if (this.carouselRef && this.carouselRef.nativeElement) {
      const carousel: HTMLElement = this.carouselRef.nativeElement;
      const bootstrap = (window as any).bootstrap;

      if (bootstrap && bootstrap.Carousel) {
        // Initialize Bootstrap Carousel
        new bootstrap.Carousel(carousel, {
          interval: 3000, // Slide every 3 seconds
          wrap: true
        });

        // Start animation for the initial active slide
        const initialActiveTimeline = carousel.querySelector('.carousel-item.active .timeline-progress');
        if (initialActiveTimeline) {
          initialActiveTimeline.classList.add('animate-progress');
        }

        // Reset timeline animation when a new slide becomes active
        carousel.addEventListener('slid.bs.carousel', () => {
          const activeTimeline: HTMLElement | null = carousel.querySelector('.carousel-item.active .timeline-progress');
          if (activeTimeline) {
            // Restart animation by toggling the class
            activeTimeline.classList.remove('animate-progress');
            void activeTimeline.offsetWidth; // Trigger reflow to reset animation
            activeTimeline.classList.add('animate-progress');
          }
        });
      } else {
        console.error('Bootstrap Carousel is not available. Ensure Bootstrap JavaScript is included.');
      }
    }
  }

  onSearch(): void {
    this.router.navigate(['/jobs']);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact-us']);
  }

  navigateToCourses(): void {
    this.router.navigate(['/course']);
  }

  navigateToJobs(): void {
    this.router.navigate(['/jobs']);
  }

  showAdvancedSearch(event: Event): void {
    event.preventDefault();
    this.snackBar.open('Advanced Search coming soon!', 'Close', {
      duration: 3000,
      panelClass: ['bg-success', 'text-white']
    });
  }

  viewDetails(project: string): void {
    this.snackBar.open(`Details for ${project} project coming soon!`, 'Close', {
      duration: 4000,
      panelClass: ['bg-success', 'text-white']
    });
  }
}