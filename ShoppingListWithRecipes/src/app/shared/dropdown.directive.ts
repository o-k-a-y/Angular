import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // Bind the open class on the element this directive is attached to 
    // to the value of the property isOpen
    // Class is the array of all the classes
    @HostBinding('class.open')
    isOpen = false;

    // Listen to click event on the element this directive is attached to
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}