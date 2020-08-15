import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// The new Component we created
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; // Now TypeScript knows where to find ServerComponent so we can add it to the Module

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent // The new Component we created. Now Angular knows about it so we can use it in our app.
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] /* Which Components Angular should be aware of when the app starts in index.html.
                             We won't be adding anymore Components to the index.html besides AppComponent */
})
export class AppModule { }
