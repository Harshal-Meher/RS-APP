import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrl: './sub-footer.component.scss'
})
export class SubFooterComponent {
toggleLike(iconId: string) {
    const icon = document.getElementById(iconId);
    if (icon) {
      icon.classList.toggle('liked');
    }
  }
}
