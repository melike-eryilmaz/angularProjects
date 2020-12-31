import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
   // templateurl yerine: html dosyası silinerek template : `` içerisine html kodu yazılabilir.
   // buna inline template denir.
   //inline template performans olarak ertıdır fakat kod yazımı ve okunurluğu açısından dosya içerisine yazmak tercih edilir.
  //templateUrl: './product.component.html',
  template : `<p>product works! by template </p>`,
  //styleUrls array şeklinde gelir.Buda birden fazla style dosyasını ekelebildiğimiz anlamına gelir.
  styleUrls: ['./product.component.css']
})

// Binding 
// One way Binding -- > Tek yönlü binding işlemidir.
// Componentten hmtl kısmına datayı taşımaktır.
// Component içerisinde tanımlanmış değişkenleri hmtl içersinde göstermeye yarar.
// Read only binding -- Yani component datasını hmtl görünümü okur.

// Two Way Binding --> 
// Html içerisinde bir isim alanını gösteren kutu olduğunu düşünelim.
// Component içerisinde isim değişkeninde tutulduğunu düşünelim.
// Eğer component içerisnde isim değişkeninin değeri değişirse html dede değişir ya da 
// html içerisinde değer değişirse component te de değişir.Buna two way binding denir.
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
