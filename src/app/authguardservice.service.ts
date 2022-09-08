import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService implements CanActivate {
  
  constructor(private Authguardservice: AuthguardserviceService, private router: Router) {}   
  
  canActivate(): boolean {  
    if (!this.Authguardservice.gettoken()) {  
        this.router.navigateByUrl("/signin"); 
      return false 
    }  
    return this.Authguardservice.gettoken();  
  } 
  gettoken(){
    return !!localStorage.getItem("SeesionUser");
 }

}
 

