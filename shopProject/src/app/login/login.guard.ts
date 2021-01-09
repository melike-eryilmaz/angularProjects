import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AccountService } from "../services/account.service";

//Guard larda service tir.
@Injectable()

export class LoginGuard implements CanActivate{
    constructor(private accountService :AccountService,private router :Router){

    }
    //canActivate true ya da false değer döner . route gideceği yeri belirtmek için kullanılır.
    //router.navigate ile de eğer login olmamışsa login sayfasına yönlendiririz.
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        let logged = this.accountService.isLoggedIn();
        if(logged){
            return true;
        }
         this.router.navigate(['login']);
         return false ;
    }
}