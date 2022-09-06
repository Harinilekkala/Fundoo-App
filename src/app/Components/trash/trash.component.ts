import { Component, OnInit } from '@angular/core';
import { NoteuserserviceService } from 'src/app/services/noteservice/noteuserservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashlist:any;
  

  constructor(private note:NoteuserserviceService) { }

  ngOnInit(): void {
    this.display_trash()
  }
  display_trash(){
    console.log('GetTrashNotes Api Calling..')
    this.note.get_trash_note().subscribe((res:any)=>{
      console.log(res)
      this.trashlist=res.data.data
    })

}
}
