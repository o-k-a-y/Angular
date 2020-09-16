import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();


  collapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

  // When the shopping list or recipes navbar buttons are clicked,
  // featureSelected event will fire
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
