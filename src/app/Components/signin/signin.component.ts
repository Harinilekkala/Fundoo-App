import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user='1'

  signinform!: FormGroup;

  constructor(private formBuilder:FormBuilder,private userservice: UserserviceService) { }

  ngOnInit(): void {
    localStorage.setItem('SessionUser',this.user)
    this.signinform=this.formBuilder.group({
      
      emailorphone:['', [Validators.required, Validators.minLength(15)]],
      p:['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onsubmit(){

    if(this.signinform.valid){
    console.log("valid data" , this.signinform.value);
    let data={
    email:this.signinform.value.emailorphone,
    password:this.signinform.value.p,
    
    }
    this.userservice.login(data).subscribe((result:any)=>{
      console.log('registration response ==========',result);
      localStorage.setItem('token',result.id)
  })
}
    else {
    console.log("Invalid data",this.signinform.value);
  }
}
  }

