import { Component, OnInit } from '@angular/core';
import { NoteuserserviceService } from 'src/app/services/noteservice/noteuserservice.service';

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
    this.note.get_note().subscribe((response:any) =>{
      this.archivelist = response.data
      this.archivelist = this.archivelist.filter((object : any) =>{
        return object.archive == true && object.trash == false;
      })
      console.log(this.archivelist)
    })
  }
  
  

}
