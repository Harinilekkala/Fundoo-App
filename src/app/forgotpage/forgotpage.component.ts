import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpage',
  templateUrl: './forgotpage.component.html',
  styleUrls: ['./forgotpage.component.scss']
})
export class ForgotpageComponent implements OnInit {

  forgotpage!: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.forgotpage=this.formBuilder.group({
      phoneoremail:['', [Validators.required, Validators.minLength(15)]],
    })
    
  }

  onsubmit(){}

}
