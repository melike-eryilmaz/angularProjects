import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/Category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-product-add-classic-forms',
  templateUrl:'./product-add-classic-forms.component.html',
  styleUrls: ['./product-add-classic-forms.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddClassicFormsComponent implements OnInit {

  constructor(private categoryService:CategoryService,
   private productService:ProductService,
   private alertifyService:AlertifyService) { }
  categories: Category[];
  model :Product=new Product();
  
  add(form :NgForm){
   this.productService.addProduct(this.model).subscribe(data=>{
     //this.alertifyService.success(data.name+" adding succesfully")
   })
    // console.log(form.value)
  }
  ngOnInit() {
    //servisten verilerimizi çekiyoruz..
    this.categoryService.getCategories().subscribe(data =>
      {this.categories=data}
      
      )
  }

}
