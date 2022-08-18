import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../services/userservice/userservice.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  registerForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,private userservice: UserserviceService ) { }
  
  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      fn:['', Validators.required],
      ln:['', Validators.required],
      e:['', [Validators.required, Validators.email]],
      p:['', [Validators.required, Validators.minLength(6)]],
      cp:['', [Validators.required, Validators.minLength(6)]],
    })
  }
  onsubmit(){
    if(this.registerForm.valid){
      console.log("valid data" , this.registerForm.value);
      let data={
        firstName:this.registerForm.value.fn,
        lastName:this.registerForm.value.ln,
        email:this.registerForm.value.e,
        password:this.registerForm.value.p,
        service:"advance"
      }
      this.userservice.register(data).subscribe((result:any)=>{
        console.log('registration response ==========',result);
      })
    }

    else{
      console.log("Invalid data",this.registerForm.value);
    }
  }

}
