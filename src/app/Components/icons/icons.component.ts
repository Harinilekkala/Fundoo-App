import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

import { NoteuserserviceService } from 'src/app/services/noteservice/noteuserservice.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() childmessage:any;
  @Output() messageEvent = new EventEmitter<any>();
  message:any;

  constructor(private note:NoteuserserviceService) { }

  ngOnInit(): void {
  }
  
  archive(){
    console.log('Icons ArchiveNote Api Calling..')
    console.log(this.childmessage);
    let data={
      noteIdList:[this.childmessage],
      
      
      isArchived: true
    }
    console.log(data)
    this.note.archive_note(data).subscribe((res:any)=>{
      console.log(res)
      this.messageEvent.emit(this.message='Note Archived')
     
    })
    
  }

  unarchive(){
    console.log('Icons UnarchiveNote Api Calling..')
    let data={
      noteIdList:[this.childmessage],
      isArchived:false
    }
    this.note.archive_note(data).subscribe((res)=>{
      console.log(res);
      this.messageEvent.emit(this.message='Note Unarchived')
      
    })
  }
  
  trash(){
    console.log('Icons More(:) DeleteNote Api Calling..')
    console.log(this.childmessage);
    let data={
      noteIdList:[this.childmessage],
      isDeleted: true
    }
    console.log(data)
    this.note.delete_note(data).subscribe((res:any)=>{
      console.log(res);
      this.messageEvent.emit(this.message='Note Trashed')
      
    })
  }

}
