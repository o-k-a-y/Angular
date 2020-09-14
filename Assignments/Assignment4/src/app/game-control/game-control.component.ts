import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // Now that it has @Output() decorator, it can be caught outside the component
  @Output() intervalFired = new EventEmitter<number>();

  // Stores the intervalID from setInterval() to be used with clearInterval(intervalID)
  interval;
  
  // The number we emit with the intervalFired event
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // Emits incrementing numbers every 1 second using event binding
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
  
  // Stops setInterval from calling the function every second
  onPauseGame() {
    clearInterval(this.interval);
  }
}
