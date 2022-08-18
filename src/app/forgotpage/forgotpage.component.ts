import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../services/userservice/userservice.service';

@Component({
  selector: 'app-forgotpage',
  templateUrl: './forgotpage.component.html',
  styleUrls: ['./forgotpage.component.scss']
})
export class ForgotpageComponent implements OnInit {

  forgotpage!: FormGroup;

  constructor(private formBuilder:FormBuilder,private userservice: UserserviceService) { }

  ngOnInit(): void {
    this.forgotpage=this.formBuilder.group({
      email:['', [Validators.required, Validators.minLength(15)]],
    })
    
  }

  onsubmit(){
    if(this.forgotpage.valid){
      console.log("valid data" , this.forgotpage.value);
      let data={
        email:this.forgotpage.value.email,
        service:"advance"
  }
  this.userservice.forgot(data).subscribe((result:any)=>{
    console.log('registration response ==========',result);
    // if(result.success===true){
    //   this.router.navigate
    // }
    
  })
}
    else {
    console.log("Invalid data",this.forgotpage.value);
  }
}
  }