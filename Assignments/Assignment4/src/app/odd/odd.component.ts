import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  // With Input() decorator we can now pass data from outside component into this component
  @Input() number: number;

  constructor() { }

  ngOnInit(): void {
  }

}
