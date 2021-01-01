import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { Product } from './Product';
// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
  //Lokal service kullanırken app.module içerisindeki providers dan kaldırıp kullanacağımız
  //component içerisindeki providers a koyarız.
  //,providers:[AlertifyService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService
    /*, private http:HttpClient*/,
    private productService:ProductService,
    private  activatedRoute:ActivatedRoute) { }
  title = 'Product List';
  filterText ="";
  // products : any[]
  // products : Product[]=[
  //   {Id:1,name:'apple',categoryId:2,description:'Delicious apple.',price:520,imageUrl:"https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"},
  //   {Id:2,name:'banana',categoryId:2,description:'Delicious banana.',price:520,imageUrl:"https://images.unsplash.com/photo-1543218024-57a70143c369?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"},
  //   {Id:3,name:'strawberry',categoryId:2,description:'Delicious strawberry.',price:520,imageUrl:"https://images.unsplash.com/photo-1564518087238-8d82baa9d7cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
  //   {Id:4,name:'blueberry',categoryId:2,description:'Delicious blueberry.',price:520,imageUrl:"https://images.unsplash.com/photo-1566400628146-ae8f27849e90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
  //   {Id:5,name:'lemon',categoryId:2,description:'Delicious lemon.',price:520,imageUrl:"https://images.unsplash.com/photo-1590502593747-42a996133562?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"},
  //   {Id:6,name:'bread',categoryId:5,description:'Delicious bread.',price:520,imageUrl:"https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"}


  // ]
  products : Product[];
  //path :string ="http://localhost:3000/products";

  //OnInit sınıfının implemente edilmesiyle oluşan ngoninit() componentimiz ilk yüklendiği zaman çalışır.
  ngOnInit() {
    //bize gelen verinin Product[] şeklinde olacağını belirtiyoruz..
  //   this.http.get<Product[]>("http://localhost:3000/products").subscribe((data)=>{
  //       this.products=data;

  // }
  //   )
//Bize verilen yolu dinamik olarak tanımladık.
  // this.http.get<Product[]>(this.path).subscribe((data)=>{
  //       this.products=data;

  // }
  //   )
    this.activatedRoute.params.subscribe(params =>
      { this.productService.getProducts(params["categoryId"]).subscribe(data=>
        {this.products=data}
        );}
      )
  // this.productService.getProducts().subscribe(data=>
  // {this.products=data}
  // );
    
  }
  addToCard(product){
      this.alertifyService.success(product.name +" added")
   // alert("Adding basket :"+product.name)
  }

}
