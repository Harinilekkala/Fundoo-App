import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  flag:any;
  isDeleteforever: boolean = true;
  isDeleted: boolean = true;

  constructor(private note:NoteuserserviceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.flag=this.route.snapshot.url[0].path;
    console.log(this.flag)
    console.log("flag displayed");
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
  delete_permanent(){
    console.log('Icons permanentDelete Note Api Calling..')
    let data={
      noteIdList: [this.childmessage],
      isDeleted: true
    }
    this.note.permanent_delete(data).subscribe((res)=>{
      console.log(res);
      this.messageEvent.emit(this.message='Note Deleted')
      
    })
  }
  restore(){
    console.log('Icons restore Note Api Calling..')
    let data={
      noteIdList: [this.childmessage],
      isDeleted: false
    }
    this.note.delete_note(data).subscribe((res)=>{
      console.log(res);
      this.messageEvent.emit(this.message='Note Restored')
      
    })
  }

}
