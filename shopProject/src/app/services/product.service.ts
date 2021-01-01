import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/Product';
import { Observable, throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';
@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class ProductService {
  path :string ="http://localhost:3000/products";
  constructor(private http:HttpClient) { }

  getProducts(categoryId):Observable<Product[]>{
    let newPath=this.path;
    if(categoryId){
      newPath=newPath+"?categoryId="+categoryId
    }
    return this.http.get<Product[]>(newPath/*this.path+"?categoryId="+categoryId*/).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse){
    let errorMessage =''
    if(err.error instanceof ErrorEvent){
      errorMessage='Bir hata oluştu'
    }
    else{
      errorMessage='Sistemsel bir hata'
    }

    return throwError(errorMessage)
  }
} 
