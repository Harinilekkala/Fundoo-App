import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../services/userservice/userservice.service';

@Component({
  selector: 'app-resetpage',
  templateUrl: './resetpage.component.html',
  styleUrls: ['./resetpage.component.scss']
})
export class ResetpageComponent implements OnInit {

  resetpage!: FormGroup;

  constructor(private formBuilder:FormBuilder,private userservice: UserserviceService) { }

  ngOnInit(): void {
    this.resetpage=this.formBuilder.group({
      oldpwd:['', [Validators.required, Validators.minLength(6)]],
      newpwd:['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onsubmit(){
    
    if(this.resetpage.valid){
      console.log("valid data" , this.resetpage.value);
      let data={
      oldpassword:this.resetpage.value.oldpwd,
      newpassword:this.resetpage.value.oldpwd,
      service:"advance"
      }
      this.userservice.register(data).subscribe((result:any)=>{
        console.log('registration response ==========',result);
    })
  }
      else {
      console.log("Invalid data",this.resetpage.value);
    }
  }
    }
