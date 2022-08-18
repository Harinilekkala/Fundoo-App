import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {HttpserviceService} from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpserviceService) { }

  register(xyz:any){
  let headers= new HttpHeaders().set(
      'Content-Type' , 'application/json'
      
    )
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',xyz,false,headers)
  }
  login(xyz:any){
    let headers= new HttpHeaders().set(
      'Content-Type' , 'application/json'
    )
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/user/login',xyz,false,headers)
  }

  forgot(xyz:any){
    let headers= new HttpHeaders().set(
      'Content-Type' , 'application/json'
    )
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/user/reset',xyz,false,headers)
  }
  }


  




