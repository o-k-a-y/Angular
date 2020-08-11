import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// The new Component we created
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent // The new pOmponent we created. Now Angular knows about it so we can use it in our app.
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
