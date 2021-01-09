import { Component } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CategoryComponent]
})
export class AppComponent {
  constructor(private accountService :AccountService){

  }
  title = 'shopProject';

  isLoggedIn(){
    return this.accountService.isLoggedIn();
  }
  logOut(){
    this.accountService.logOut();
  }

}
