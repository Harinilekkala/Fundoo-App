import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinform!: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signinform=this.formBuilder.group({
      
      emailorphone:['', [Validators.required, Validators.minLength(15)]],
      p:['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onsubmit(){

  }

}
