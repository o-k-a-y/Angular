import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: "server", name: "testServer", content: "just a test"}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  // To demonstrate ngOnChanges because we change Input property in server-element component 
  onChangeFirst() {
    this.serverElements[0].name = "Changed!";
  }

  // To demonstrate ngOnDestroy
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
  
}
