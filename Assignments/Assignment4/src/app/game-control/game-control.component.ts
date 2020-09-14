import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // Now that it has @Output() decorator, it can be caught outside the component
  @Output() intervalFired: EventEmitter<number> = new EventEmitter<number>();
  interval;
  
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
  
  onPauseGame() {
    clearInterval(this.interval);
  }
}
