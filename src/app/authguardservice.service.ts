import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService  {
  
  constructor() {}   
  
  
  gettoken(){
    return !!localStorage.getItem("token");
 }

}
 

