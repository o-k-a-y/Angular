import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector: "[appBasicHighlight]"
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        // Better to use renderer instead of direct access because if running angular outside the browser more errors can occur
        this.elementRef.nativeElement.style.backgroundColor = "green";
        this.elementRef.nativeElement.style.color = "white";
    }

}