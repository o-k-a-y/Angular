import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // Bind the open class on the element this directive is attached to 
    // to the value of the property isOpen
    // Class is the array of all the classes
    @HostBinding('class.open')
    isOpen = false;

    // When document is clicked off a dropdown, close the dropdown, otherwise open the dropdown
    // Listen to click event on the element this directive is attached to
    @HostListener('document:click', ['event']) toggleOpen() {
        // console.log(event.target);
        console.log(this.elRef.nativeElement);
        console.log("1");
        // let test = this.elRef.nativeElement.toString().split("target")
        // console.log(test);
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    // // Listen to click event on the element this directive is attached to
    // @HostListener('click') toggleOpen() {
    //     this.isOpen = !this.isOpen;
    // }



    constructor(private elRef: ElementRef) {}
}