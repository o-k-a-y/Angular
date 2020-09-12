import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // EventEmitter is an object in angular framework which allows you to emit your own events
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';

  // A reference to the element
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // This event is fired when the add server button in cockpit is clicked
  // This event is captured in app.component.html once emitted
  onAddServer(serverNameInput: HTMLInputElement) {
    // Using ViewChild/element reference
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });

    // Using two way binding
    // this.serverCreated.emit({
    //   serverName: serverNameInput.value,
    //   serverContent: this.newServerContent
    // });
  }

  // This event is fired when the add blueprint button in cockpit is clicked
  // This event is captured in app.component.html once emitted
  onAddBlueprint(serverNameInput: HTMLInputElement) {
    // Using ViewChild/element reference
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });

    // Using two way binding
    // this.blueprintCreated.emit({
    //   serverName: serverNameInput.value,
    //   serverContent: this.newServerContent
    // });
  }

}
