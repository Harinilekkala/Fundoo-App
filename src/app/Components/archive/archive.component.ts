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

  constructor(private note: NoteuserserviceService) { }

  ngOnInit(): void {
    this.display_archive()
  }
  display_archive(){
    console.log('GetArchiveNotes Api Calling..')
    this.note.get_archive_note().subscribe((res:any)=>{
      this.archivelist=res.data.data
      console.log(this.archivelist)
    })
  }
  // display_archive(){
  //   console.log('GetArchiveNotes Api Calling..')
  //   this.note.get_archive_note().subscribe((res:any)=>{
  //     this.archivelist=res.data.data
  //     console.log(this.archivelist)
  //   })
  // }
  
  

}
