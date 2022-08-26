import { Component, OnInit } from '@angular/core';
import { NoteuserserviceService } from 'src/app/services/noteservice/noteuserservice.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetNotesComponent implements OnInit {
  token:any;
  noteArray:any;
  notesValue:any;

  constructor(private note:NoteuserserviceService) { }

  ngOnInit(): void {
    this.getnotes();
  }
  getnotes(){
    console.log('GetAllNotes Api Calling..')
    this.note.get_note().subscribe((res:any)=>{
      console.log(res.data.data);
      this.noteArray = res.data.data;
      this.notesValue = this.noteArray.filter((obj:any)=>{
        return obj.isDeleted===false && obj.isArchived===false
    })
  })
    
  }

  receiveMessage(event:any){
    console.log(event);
    this.getnotes();
  }

}
