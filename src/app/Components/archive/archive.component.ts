import { Component, OnInit } from '@angular/core';
import { NoteuserserviceService } from 'src/app/services/noteservice/noteuserservice.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archivelist:any
  archivelistValue:any

  constructor(private note: NoteuserserviceService) { }

  ngOnInit(): void {
    this.getnotes();
  }
  getnotes(){
    console.log('GetArchive notes Api Calling..')
    this.note.getallnotes().subscribe((res:any)=>{
      console.log(res.data.data);
      this.archivelist = res.data.data;
      this.archivelistValue = this.archivelist.filter((obj:any)=>{
        return obj.isArchived===true
    })
  })
    
  }

  
}
