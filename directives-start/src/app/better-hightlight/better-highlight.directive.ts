import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Better to use renderer because if running angular outside the browser more errors can occur
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

}
