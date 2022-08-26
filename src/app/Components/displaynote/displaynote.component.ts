import { Component, OnInit } from '@angular/core';
import { NoteuserserviceService } from 'src/app/services/noteservice/noteuserservice.service';
@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {

  constructor(private noteuserservice:NoteuserserviceService) { }

  ngOnInit(): void {
    
    
  }

}
