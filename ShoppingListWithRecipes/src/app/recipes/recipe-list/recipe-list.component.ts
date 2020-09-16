import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("salad", "yum yum salad", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/800px-Salad_platter.jpg"),
    new Recipe("same salad", "still good", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/800px-Salad_platter.jpg")
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
