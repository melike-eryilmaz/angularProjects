import { Component } from '@angular/core';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CategoryComponent]
})
export class AppComponent {
  title = 'shopProject';
}
