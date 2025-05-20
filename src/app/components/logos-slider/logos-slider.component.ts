import { Component } from '@angular/core';

@Component({
  selector: 'app-logos-slider',
  templateUrl: './logos-slider.component.html',
  styleUrl: './logos-slider.component.scss'
})
export class LogosSliderComponent {
  partners = [
    'https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
    'https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg',
    // 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Amazon_logo_RGB.png',
    'https://www.logo.wine/a/logo/Adobe_Inc./Adobe_Inc.-Logo.wine.svg',
    // 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Oracle_logo.svg/2560px-Oracle_logo.svg.png',
    // 'https://www.logo.wine/a/logo/Salesforce/Salesforce-Logo.wine.svg',
    // 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/IBM_logo.svg/2560px-IBM_logo.svg.png',
    'https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg',
    // 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png',
    'https://www.logo.wine/a/logo/DigitalOcean/DigitalOcean-Logo.wine.svg',
  ];

  get doubledPartners() {
    return [...this.partners, ...this.partners];
  }
}