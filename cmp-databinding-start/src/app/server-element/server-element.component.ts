import { 
  Component, 
  ViewEncapsulation, 
  Input, 
  OnInit, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // Makes the css applied to this component affect the global DOM (probably not what you want almost always)
  // ViewEncapsulation.Native uses Shadow DOM 
  // https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM
  // ViewEncapsulation.Emulated emulates Shadow DOM so works regardless of browser. This is the default behavior
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy {
  // @Input exposes the property (now it's publicly accessible from other components)
  // In paranthesis we make an alias of what this variable must be referenced by in any component other than itself
  //    in order to bind to it
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;

  @ViewChild('heading', {static: true}) header: ElementRef;


  // The follow lifecycle hooks are called in the order displayed (mostly, because ngDoCheck has 4 nested checks within in, and other little details)
  // https://angular.io/guide/lifecycle-hooks

  constructor() {
    console.log("constructor called!");
  }


  // Called before ngOnInit() and whenever one or more data-bound input properties change.
  // Note that if your component has no inputs or you use it without providing any inputs, 
  // the framework will not call ngOnChanges().
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  // Called once, after the first ngOnChanges().
  ngOnInit(): void {
    console.log("ngOnInit called!");

    // We can't access the elements of the DOM because it hasn't been rendered yet. 
    // ngAfterViewInit() would be a better place to check/manipulate DOM elements
    console.log("Header value: " + this.header.nativeElement.textContent);
  }

  // Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.
  ngDoCheck(): void {
    console.log("ngDoCheck called!");
  }

  // Called once after the first ngDoCheck().
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called!");
  }

  // Called after ngAfterContentInit() and every subsequent ngDoCheck().
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called!");
  }

  // Called once after the first ngAfterContentChecked().
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called!");
    console.log("Header value: " + this.header.nativeElement.textContent);
  }

  // Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called!");
  }

  // Called immediately before Angular destroys the directive or component.
  ngOnDestroy(): void {
    console.log("ngOnDestroy called!");
  }
  

}
