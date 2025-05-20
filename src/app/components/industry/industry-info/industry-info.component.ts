import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

interface Industry {
  name: string;
  icon: string;
  details: string[];
  services: string[];
  heroImage?: string;
}

@Component({
  selector: 'app-industry-info',
  templateUrl: './industry-info.component.html',
  styleUrls: ['./industry-info.component.scss']
})
export class IndustryInfoComponent implements OnInit {
  industry: Industry | null = null;
  isZoomed: boolean = false;

  @ViewChild('contentSection') contentSection!: ElementRef;
  
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.industry = navigation?.extras.state?.['industry'] || null;
  }

  ngOnInit(): void {
    if (!this.industry) {
      this.router.navigate(['/']);
    }
  }

  openImageModal(): void {
    const modal = document.getElementById('imageModal');
    if (modal) {
      // Use Bootstrap's modal method if available
      if (typeof (window as any).bootstrap !== 'undefined') {
        const bootstrapModal = new (window as any).bootstrap.Modal(modal);
        bootstrapModal.show();
      } else {
        // Fallback to manual method
        modal.classList.add('show');
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop fade show';
        document.body.appendChild(backdrop);
      }
    }
  }

  closeImageModal(): void {
    const modal = document.getElementById('imageModal');
    if (modal) {
      // Use Bootstrap's modal method if available
      if (typeof (window as any).bootstrap !== 'undefined') {
        const bootstrapModal = (window as any).bootstrap.Modal.getInstance(modal);
        if (bootstrapModal) {
          bootstrapModal.hide();
        }
      } else {
        // Fallback to manual method
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove();
        }
      }
    }
  }
  toggleZoom(): void {
    this.isZoomed = !this.isZoomed;
  }

  scrollToContent(): void {
    this.contentSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  openContact(): void {
    alert(`Contact us for ${this.industry?.name} industry solutions!`);
  }

  
}