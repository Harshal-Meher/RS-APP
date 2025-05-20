import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollToTop]'
})
export class ScrollToTopDirective {

  constructor(private ele:ElementRef) { }

  @HostListener('click',['$event'])

  onClick(){
    window.scroll({top:0,behavior:'auto'})
  }

}
