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
  getallnotes(){
    let header= {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
      })
    }
    return this.http.getservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', true, header)
  }
  update_note(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
      return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes', data, true, header)
  }

  archive_note(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes', data, true, header)
  }

  get_archive_note(){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.getservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/getArchiveNotesList', true, header)
  }
  get_trash_note(){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.getservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/getTrashNotesList', true, header)
  }

  delete_note(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes', data, true, header)
  }
  permanent_delete(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/deleteForeverNotes', data, true, header)
  }
    
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


