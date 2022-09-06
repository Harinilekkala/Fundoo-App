import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { NoteuserserviceService } from 'src/app/services/noteservice/noteuserservice.service';
import { MatDialog } from '@angular/material/dialog';

import { UpdateComponent } from '../update/update.component';


 

@Component({
  
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  message:any;
  noteId:any;
  

  
    @Output() messageEvent = new EventEmitter<any>();
  

  constructor(public dialog: MatDialog,private noteuserservice:NoteuserserviceService) { }
  @Input () notedata :any;
  ngOnInit(): void {
    
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '500px',
      data:note
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
   



}