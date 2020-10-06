import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountsService]
})
export class AppComponent implements OnInit {
  // Array of json
  accounts: {name: string, status: string}[] = [];
  
  constructor(private accountsService: AccountsService) {}


  ngOnInit() {
    // Remember, arrays in JS are references so we are referencing the same array in AccountsService
    this.accounts = this.accountsService.accounts;
  }
  
}
