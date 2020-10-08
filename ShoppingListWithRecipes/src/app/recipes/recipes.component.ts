import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    // Listen for event emitted on the service (when a recipe is clicked)
    this.recipeService.recipeSelected.subscribe(
      // the data we are receiving
      (recipe: Recipe) /* the function we will execute when event fired */=> {
        this.selectedRecipe = recipe;
      }
    );
  }

}
