export class Ingredient {

    // Added the public accessor to constructor params is the same as
    // having the paramaters as public and assigning them through this.name = name, etc
    constructor(public name: string, public amount: number) {
        
    }
}