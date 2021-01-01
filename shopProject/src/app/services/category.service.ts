import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';
import { Category } from '../category/Category';
@Injectable(
 // {
//   providedIn: 'root'   //Heryerden erişilebilir bir servis olmasını istemedğimiz için kapattık.
// }
)
export class CategoryService {

  constructor(private http:HttpClient) { }

  path :string ="http://localhost:3000/categories";
  

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.path).pipe(
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
