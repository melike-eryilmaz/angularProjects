import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  //Yeni bir component oluşturursak declarations içerisine ekleme yaparız.
  declarations: [
    AppComponent,
    ProductComponent
  ],
  //Uygulama içerisinde başka  module eklemek istersek imports içerisine ekleriz.
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //Burada bootstrap ile başlangıç componentinin AppComponent olduğunu söylüyoruz.
  bootstrap: [AppComponent]
})
export class AppModule { }
