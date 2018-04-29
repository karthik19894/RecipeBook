import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[new Recipe('Test Recipe','This is just a test recipe','http://assets.kraftfoods.com/recipe_images/opendeploy/143366_640x428.jpg'),new Recipe('Test Recipe','This is just a test recipe','http://assets.kraftfoods.com/recipe_images/opendeploy/143366_640x428.jpg')];

  

  constructor() { }

  ngOnInit() {
  }

}
