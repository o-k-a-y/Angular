import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {
    
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);  

    // this.loggingService.logStatusChanged(accountStatus);
    
    // console.log('A server status changed, new status: ' + accountStatus);
  }

  ngOnInit() {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }
}
