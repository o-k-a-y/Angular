import { Injectable } from "@angular/core";

// Now the entire root module (app module) has access to this service
// We could have just put this in the providers array in app.module or app.component
@Injectable({providedIn: 'root'})
export class CounterService {
    setToInactiveCount: number;
    setToActiveCount: number;

    constructor() {
        this.setToInactiveCount = 0;
        this.setToActiveCount = 0;
    }

    increaseInactiveCount() {
        this.setToInactiveCount++;

        console.log("Inactive count: " + this.setToInactiveCount);
    }

    increaseActiveCount() {
        this.setToActiveCount++;

        console.log("Active count: " + this.setToActiveCount);
    }
}