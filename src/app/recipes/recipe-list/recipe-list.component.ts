import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe A', 'Recipe test description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpayAJVE3qOtVRb5oBrBFdzuUVqLGQ-RghUA&usqp=CAU')
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
