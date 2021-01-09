import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//Routingi alacağımız module burada import edilmiştir.
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import {HttpClientModule} from '@angular/common/http';
import { ProductAddClassicFormsComponent } from './product/product-add-classic-forms/product-add-classic-forms.component';
import { ProductAddReactiveFormsComponent } from './product/product-add-reactive-forms/product-add-reactive-forms.component';
import { LoginComponent } from './login/login.component'
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddClassicFormsComponent,
    ProductAddReactiveFormsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule  ],
  //Global serviceler burada tanımlanmalıdır.
  providers: [AlertifyService,AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
