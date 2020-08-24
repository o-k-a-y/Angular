import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = "offline";

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  ngOnInit(): void {
  }


  // Return green if the status in online, red otherwise
  getColor(): string {
    return this.serverStatus === 'online' ? 'green': 'red';
  }

}
