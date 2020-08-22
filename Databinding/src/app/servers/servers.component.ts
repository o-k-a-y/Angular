import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = "No server was created!";
  serverName = 'testserver';

  constructor() { 
    setTimeout(() => { 
      this.allowNewServer = true;
     }, 2000);
  }

  ngOnInit(): void {
  }

  // Called when the button is clicked:
  //    (click)="onCreateServer()">Add Server
  onCreateServer() {
    this.serverCreationStatus = "Server was created!";
  }

  // Function used in the event binding example in servers.component.hmtl
  onUpdateServerName(event: Event) {
    // Explicit casting so TypeScript knows that the type of the event is an html input element
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

}
