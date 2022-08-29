import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';


@Injectable({
    providedIn: 'root'
 })
export class AuthGuard implements CanActivate {


    constructor( private router: Router) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree {
           
                let isLoggedIn = this.checkLogin();
                if(!isLoggedIn){
                    this.router.navigate(['/Login']);
                }
               return isLoggedIn;
           }


           checkLogin(): boolean {
            debugger;
            let val: string = localStorage.getItem('isUserLoggedIn');
   
            if(val != null && val == "true"){
               
                  return true;
            } else
             {
                return false;
            }
         }
}