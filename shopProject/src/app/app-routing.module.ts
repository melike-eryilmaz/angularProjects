import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { ProductAddClassicFormsComponent } from './product/product-add-classic-forms/product-add-classic-forms.component';
import { ProductAddReactiveFormsComponent } from './product/product-add-reactive-forms/product-add-reactive-forms.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    //Eğer /products gelmişse product componentini çalıştır.
    {path:'products',component:ProductComponent},
    {path:'product-add-1',component:ProductAddClassicFormsComponent},
    {path:'product-add-2',component:ProductAddReactiveFormsComponent},
    // Gidilecek component i category yaparsak products routunda category componentin çizildiğini görürüz.
    // {path:'products',component:CategoryComponent},

    //Eğer hiçbirşey gelmemişse products route a yönlendir.Kesinlikle hiçbir şey gelmemişse.'full'
    {path:'',redirectTo:'products',pathMatch:'full'},
    {path:'products/category/:categoryId',component:ProductComponent},
    {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]//Dışarıdan çağrılabildiğini ifade eder.
})
//Angular projesi oluşturulurken routing istiyormusun sorusuna evet diyince gelen routing i sağlayan moduldür.
export class AppRoutingModule { }
