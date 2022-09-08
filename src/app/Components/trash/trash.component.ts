import { Component,  OnInit  } from '@angular/core';
import { NoteuserserviceService } from 'src/app/services/noteservice/noteuserservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashlist:any;
  trashlistvalue:any;
  

  constructor(private note:NoteuserserviceService) { }

  ngOnInit(): void {
    this.display_trash()
  }
  display_trash(){
    console.log('GetTrashNotes Api Calling..')
    this.note.getallnotes().subscribe((res:any)=>{
      console.log(res)
      this.trashlist=res.data.data
      console.log(this.trashlist)
      this.trashlistvalue = this.trashlist.filter((object: any) => {
        return object.isDeleted=== true;
      });
    })
  }
    // delete_permenant(){
    //     console.log('Icons permanentDelete Note Api Calling..')
    //     let data={
    //       noteIdList: [this.childmessage],
    //       isDeleted: true
    //     }
    //     this.note.permanent_delete(data).subscribe((res)=>{
    //       console.log(res);
    //       this.messageEvent.emit(this.message='Note Deleted')
          
    //     });
    //   }
    //   restore(){
    //     console.log('Icons restore Note Api Calling..')
    //     let data={
    //       noteIdList: [this.childmessage],
    //       isDeleted: false
    //     }
    //     this.note.delete_note(data).subscribe((res)=>{
    //       console.log(res);
    //       this.messageEvent.emit(this.message='Note Restored')
          
    //     })
    //   }
    

}

