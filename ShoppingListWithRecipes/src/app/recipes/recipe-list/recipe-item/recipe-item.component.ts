import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // recipe-list will set this value when displaying all recipe-items
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
