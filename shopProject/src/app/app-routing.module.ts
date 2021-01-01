import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    //Eğer /products gelmişse product componentini çalıştır.
    {path:'products',component:ProductComponent},
    {path:'product-add-1',component:ProductComponent},
    {path:'product-add-2',component:ProductComponent},
    // Gidilecek component i category yaparsak products routunda category componentin çizildiğini görürüz.
    // {path:'products',component:CategoryComponent},

    //Eğer hiçbirşey gelmemişse products route a yönlendir.Kesinlikle hiçbir şey gelmemişse.'full'
    {path:'',redirectTo:'products',pathMatch:'full'},
    {path:'products/category/:categoryId',component:ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]//Dışarıdan çağrılabildiğini ifade eder.
})
//Angular projesi oluşturulurken routing istiyormusun sorusuna evet diyince gelen routing i sağlayan moduldür.
export class AppRoutingModule { }
