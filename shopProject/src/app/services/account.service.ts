import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  constructor() { }
  //Eğer bu kullanıcı login olmuşsa kısmını localstorage yani lokal hafıza da tutarak yapacağız.
  loggedIn = false;
  login(user:User):boolean{
      if(user.userName == 'Melike' && user.password == '123a')
      {
        return true;
        this.loggedIn = true;
        localStorage.setItem('isLogged',user.userName)
      }
      return false ;
  }
  isLoggedIn(){
    return this.loggedIn;
  }
  logOut(){
    localStorage.removeItem('isLogged');
    this.loggedIn= false ;
  }
}
