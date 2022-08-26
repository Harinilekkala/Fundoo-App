import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms'
import { NoteuserserviceService } from 'src/app/services/noteservice/noteuserservice.service';

@Component({
    selector: 'app-createnote',
     templateUrl: './createnote.component.html',
     styleUrls: ['./createnote.component.scss'],
   })
   export class CreatenoteComponent implements OnInit {
   createNoteForm! : FormGroup
   flag=false;
   message:any;
  @Output() messageEvent = new EventEmitter<any>();
  
  constructor(private fb:FormBuilder, private note:NoteuserserviceService) { }

  ngOnInit(): void {
    this.createNoteForm=this.fb.group({
      title:[''],
      desc:['']
    })
  }
  open(){
    this.flag=true
  }
  onSubmit(){
    this.flag=false
    let data={
      'title': this.createNoteForm.value.title,
      'description': this.createNoteForm.value.desc
    }
    
    console.log('Create Note Api calling starts..')
    this.note.create_note(data).subscribe((res)=>{
      console.log(res);
      this.messageEvent.emit(this.message="Note Created")
    })
    
  }
    
  


}







































// import { Component, OnInit, Output } from '@angular/core';
// import{FormBuilder, FormGroup, Validators } from '@angular/forms';
// import {  EventEmitter} from '@angular/core';
// import { NoteuserserviceService } from 'src/app/services/noteservice/noteuserservice.service';

// @Component({
//   selector: 'app-createnote',
//   templateUrl: './createnote.component.html',
//   styleUrls: ['./createnote.component.scss'],
// })
// export class CreatenoteComponent implements OnInit {

//   createform!: FormGroup;
//   isshow = false;
//   title: any;
//   desc: any;
//   message:any;
  

//   constructor(private formBuilder:FormBuilder,private note: NoteuserserviceService) {}

//   @Output() messageEvent = new EventEmitter<string>();

//   ngOnInit(): void {
    
//       this.createform = this.formBuilder.group({
//         title: [null, Validators.required],
//         description: [null, Validators.required]
//       });

//   }
  

//   show() {
//     this.isshow = true;
//   }

//   close() {
//     this.isshow = false;
    
//     let data={
//       'title': this.createform.value.title,
//       'description': this.createform.value.desc
//     }
    
//     console.log('Create Note Api calling starts..')
//     this.note.Addnote(data).subscribe((res)=>{
//       console.log(res);
//       this.messageEvent.emit(this.message="Note Created")
//     })
    
//   }  
// }

//   // blurmethod() {
//   //   console.log('Blur Method called');
//   //   let data = {
//   //     title: this.title,
//   //     description: this.desc,
//   //   };
//   //   this.note.Addnote(data).subscribe((res: any) => {
//   //     console.log(res.data.data);
//   //   });
//   // }

//   // myFunc(){
//   //   console.log("function called");
//   // }

  