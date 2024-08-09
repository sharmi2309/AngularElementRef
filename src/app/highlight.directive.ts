import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(click)':'logic()'
  }
})
export class HighlightDirective {
  @Input() number = 0;
  @Input() isdivisibleby = 1;
  private el: ElementRef | undefined;
  constructor(el:ElementRef) {
    this.el = el;
  }
  logic() {
    if (this.number % this.isdivisibleby === 0) {
      if (this.el) {
        this.el.nativeElement.style.color = 'green';
      }
    }
    else {
      if (this.el) {
         this.el.nativeElement.style.color = 'red';
        }
      }


    }
  }


