import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {HttpserviceService} from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteuserserviceService {
  token:any=localStorage.getItem('token')


  constructor(private http:HttpserviceService) { 
    
  }
  create_note(xyz:any){
    let header= {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes', xyz, true, header)
  }
  get_note(){
    let header= {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
      })
    }
    return this.http.getservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', true, header)
  }
    
      // editnote(xyz:any,userid:any){
      //   let headers= new HttpHeaders().set(
      //       'Content-Type' , 'application/json'
            
      //     )
      //     return this.http.putservice(`http://fundoonotes.incubation.bridgelabz.com/api/user/${userid}/notes`,xyz,false,headers)
      //   }
      //   deletenote(userid:any){
      //     let headers= new HttpHeaders().set(
      //         'Content-Type' , 'application/json'
              
      //       )
      //       return this.http.deleteservice(`http://fundoonotes.incubation.bridgelabz.com/api/user/${userid}/notes`,false,headers)
      //     }
}

