import { Component } from '@angular/core';

//Angularda class ın bir component olduğunu belirtmek için @component dekaratörü kullanılır.
//selector bizim componentimizi diğer hmtl dosyaları içerisinde hangi isimle çağıracağımızı belirtir.
//Angular componenti temelde bir html ve bir ts dosyası olmak üzere iki bileşenden oluşur.
//Angular da component tarafında tanımladığımız değişkennleri html de {{}} arasında çağırabiliriz.
//service dosyaları web api den datayı alıp web api ile component arasındaki bağlantıyı sağladığımız yapıdır.
//Terminal de ng g component componentİsmi komutuyla kendi componentimizi oluşturabiliriz.

// Component bir class tan ,o class ı besleyen bir decarator ve html den oluşur.
// Component module altındadır.
// Module angular component ,service ve html li toplayan ana mimaridir.
// Angularda ana module vardır.Ana module içerisinde farklı modüller eklenebilir.
// Angular temelde module ü bilir module ise componenti bilir.
// app.module.ts altında yeni bir component ekleyince declarations alanına component eklenir.
// ve import eder.

// export dışarıdan erişilebilir component demektir.
// Dosya içerisinde birden fazla class olabildiği için import da class da belirtilir. 
// Module de aslında birer class tır .@ngmodule decarator vasıtasıyla module olduğu anlaşılır.
// imports altında başka module kullanılacağı zaman buraya eklenir.(app.module.ts)
// bootstrap bu uygulamanın başlangıç componentini belirtmek için kullanılır.
// main.ts de de bootstrap module verilmiş olmalıdır.bu uygulamanın module ü olduğunu anlarız.

// templateurl yerine: html dosyası silinerek template : `` içerisine html kodu yazılabilir.
// buna inline template denir.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Component içerisinde tanımlanan değişkenleri html de {{title}} şeklinde çağırabiliriz.
  title = 'firstAngularProject';
}
