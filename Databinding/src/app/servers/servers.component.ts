import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // Allows creation of new servers
  allowNewServer: boolean = false;
  // Status of server creation
  serverCreationStatus = "No server was created!";
  // Name of server
  serverName = 'TestServer';
  // Creation status of the server
  serverCreated: boolean = false;

  // List of all servers
  servers = [this.serverName];

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
    this.serverCreated = true;

    this.servers.push(this.serverName);

    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  // Function used in the event binding example in servers.component.hmtl
  onUpdateServerName(event: Event) {
    // Explicit casting so TypeScript knows that the type of the event is an html input element
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

}
