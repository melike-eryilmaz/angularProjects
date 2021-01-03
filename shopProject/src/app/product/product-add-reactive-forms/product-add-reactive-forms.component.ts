import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/Category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-product-add-reactive-forms',
  templateUrl: './product-add-reactive-forms.component.html',
  styleUrls: ['./product-add-reactive-forms.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddReactiveFormsComponent implements OnInit {
  productAddForm:FormGroup;
  product :Product=new Product();
  categories: Category[];
  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService,
    private productService:ProductService,
    private alertifyService:AlertifyService) { }
  createProductAddForm(){
    this.productAddForm= this.formBuilder.group({
      name : ["",Validators.required],
      description : ["",Validators.required],
      imageUrl : ["",Validators.required],
      price : ["",Validators.required],
      categoryId : ["",Validators.required]


    })
  }
  add(){
    if(this.productAddForm.valid){
      this.product=Object.assign({},this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data=>{
      //this.alertifyService.success(data.name+" adding succesfully")
    })
  }
  ngOnInit(){
    this.createProductAddForm();
    this.categoryService.getCategories().subscribe(data =>
      {this.categories=data}
      
      )
    }

}
