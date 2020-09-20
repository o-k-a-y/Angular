import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // Setter of property MUST match selector name for structural directives to be accessible!
  // Whenever the values passed (condition) change, this setter method is called
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // Create view in view container
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      // Destroys all views in the container
      this.viewContainerRef.clear();
    }
  }


  // Like ElementRef, TemplateRef is a reference to a template
  // This is needed so we can know whether to render it
  // Template is the WHAT, ViewContainer is the WHERE we will render it
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
