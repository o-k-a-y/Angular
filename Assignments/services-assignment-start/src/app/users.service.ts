import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

// Now the entire root module (app module) has access to this service
@Injectable({providedIn: 'root'})
export class UsersService {
    activeUsers: Array<string>;
    inactiveUsers: Array<string>;

    constructor(private counterService: CounterService) {
        this.activeUsers = ['Max', 'Anna'];
        this.inactiveUsers = ['Chris', 'Manu'];
    }

    setUserInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);

        this.counterService.increaseInactiveCount();
    }

    setUserActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);

        this.counterService.increaseActiveCount();
    }

    // There is no addUser method, but we could add one to extend functionality
    // addUser() {

    // }
}