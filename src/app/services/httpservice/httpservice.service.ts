import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private httpClient: HttpClient) { }

  postservice(url:string, data:any, token:boolean=false, httpOptions:any){
    
    return this.httpClient.post(url, data, token && httpOptions)
  }

  getservice(url:string, token:boolean=false, httpOptions:any){
    return this.httpClient.get(url, token && httpOptions)
  }

  putservice(){}
}
