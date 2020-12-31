import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from './Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]//servisimizi buraya ekliyoruz.
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  title = "Category List"
  categories: Category[];
  // =
  // [
  //  {id:1,name:"Fruits"},
  //  {id:1,name:"Vegetables"},
  //  {id:1,name:"Chickhens"},
  //  {id:1,name:"Cakes"},
  //  {id:1,name:"Salads"}
  // ]
  ngOnInit() {
    //servisten verilerimizi çekiyoruz..
    this.categoryService.getCategories().subscribe(data =>
      {this.categories=data}
      
      )
  }

}
