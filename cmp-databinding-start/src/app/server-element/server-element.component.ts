import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
  
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // Makes the css applied to this component affect the global DOM (probably not what you want almost always)
})
export class ServerElementComponent implements OnInit {
  // @Input exposes the property (now it's publicly accessible from other components)
  // In paranthesis we make an alias of what this variable must be referenced by in any component other than itself
  //    in order to bind to it
  @Input('srvElement') element: {type: string, name: string, content: string};



  constructor() {
   }

  ngOnInit(): void {
  }

}
