import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("salad", "yum yum salad", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/800px-Salad_platter.jpg"),
        new Recipe("same salad", "still good", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/800px-Salad_platter.jpg")
    ];

    getRecipes() {
        // slice() returns a new object (a copy) instead of a reference so that a change outside will not change the internal array
        return this.recipes.slice();
    }
}