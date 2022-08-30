import { Component, Input, OnInit, Output } from '@angular/core';
import { NoteuserserviceService } from 'src/app/services/noteservice/noteuserservice.service';
// import { EventEmitter } from 'stream';

@Component({
  
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {

  message:any;
  // @Output() messageEvent = new EventEmitter<string>();
  

  constructor(private noteuserservice:NoteuserserviceService) { }
  @Input () notedata :any;
  ngOnInit(): void {
    
    
  }

}
