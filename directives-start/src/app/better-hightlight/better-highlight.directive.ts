import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // On the element that this directive sits, bind the style property and subproperty background color to this variable
  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'transparent';

  @HostBinding('style.color')
  textColor: string = 'black';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // // Better to use renderer because if running angular outside the browser more errors can occur
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  // Change background color blue on mouse over
  // HostListener listens for DOM events and will execute this function when fired
  // Text color set to white so it's actually readable
  @HostListener('mouseenter')
  mouseover(eventData: Event) {
    // Better to use renderer because if running angular outside the browser more errors can occur
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');

    this.backgroundColor = 'blue';
    this.textColor = 'white';
  }

  // Reset text when mouse leave
  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    // Better to use renderer because if running angular outside the browser more errors can occur
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');

    this.backgroundColor = 'transparent';
    this.textColor = 'black';
  }

}
