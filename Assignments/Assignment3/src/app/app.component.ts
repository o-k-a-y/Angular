import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment3';

  paragraphTextVisible: boolean;

  buttonClickTimeStamps = [];
  timeStamps = 0;

  constructor() {
    this.paragraphTextVisible = true;
  }

  toggleParagraphTextVisibility() {
    // if (this.paragraphTextVisible === true) {
    //   this.paragraphTextVisible = false
    // } else {
    //   this.paragraphTextVisible = true;
    // }
    this.paragraphTextVisible === true ? this.paragraphTextVisible = false: this.paragraphTextVisible = true;
  }

  addToClickList() {
    this.buttonClickTimeStamps.push(Date.now());
    this.timeStamps++;
    console.log(this.buttonClickTimeStamps);
  }

}
