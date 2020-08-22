import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment2';

  username: string = '';

  resetUsername() {
    this.username = '';
  }

  isUsernameEmpty() {
    return this.username.length == 0;
  }
}
